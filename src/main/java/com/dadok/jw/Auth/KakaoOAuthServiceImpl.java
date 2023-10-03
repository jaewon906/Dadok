package com.dadok.jw.Auth;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@RequiredArgsConstructor
@Component
@Slf4j
public class KakaoOAuthServiceImpl implements KakaoOAuthService{

    @Override
    public ResponseEntity<String> login(Optional<LogInDTO.RequestDTO> logInDTO, HttpServletRequest request){

        if (logInDTO.isPresent()) {

            KakaoOAuthDTO authenticate = getAuthenticate(logInDTO, request);
            getUserInfo(authenticate);

            return ResponseEntity.ok(HttpStatus.OK.toString());

        } else

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @Override
    public KakaoOAuthDTO getAuthenticate(Optional<LogInDTO.RequestDTO> logInDTO, HttpServletRequest request) {

            HttpHeaders headers = new HttpHeaders();

            headers.add(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded;charset=utf-8"); //카카오에 contents-type을 필수로 보내야함

            MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
            param.add("grant_type", "authorization_code");
            param.add("client_id", "ba1dbc690bf2094c4d036e94b7c1e6bc");
            param.add("redirect_uri", "http://localhost:3000/kakao/oauth");
            param.add("code", logInDTO.get().getCode());

            HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(param, headers);

            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> getTokenResult = restTemplate.exchange(
                    "https://kauth.kakao.com/oauth/token",
                    HttpMethod.POST,
                    kakaoTokenRequest,
                    String.class
            );


            JSONObject jsonObject = new JSONObject(getTokenResult.getBody());

            String accessToken = jsonObject.getString("access_token");
            String expires_in_accessToken = jsonObject.get("expires_in").toString();
            String refreshToken = jsonObject.getString("refresh_token");
            String expires_in_refreshToken = jsonObject.get("refresh_token_expires_in").toString();
            String scope = jsonObject.getString("scope");
            String token_type = jsonObject.getString("token_type");


        return KakaoOAuthDTO.builder()
                .access_token(accessToken)
                .refresh_token(refreshToken)
                .expires_in(expires_in_accessToken)
                .refresh_token_expires_in(expires_in_refreshToken)
                .scope(scope)
                .token_type(token_type)
                .build();


    }

    @Override
    public void getUserInfo(KakaoOAuthDTO kakao){

        String accessToken = kakao.getAccess_token();
        String grantType = kakao.getToken_type();

        HttpHeaders headers = new HttpHeaders();

        headers.add(HttpHeaders.AUTHORIZATION, grantType + " ${"+accessToken+"}"); //Bearer 타입의 엑세스토큰
        headers.add(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded;charset=utf-8"); //카카오에 contents-type을 필수로 보내야함

        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();

        HttpEntity<MultiValueMap<String, String>> kakaoGetUserRequest = new HttpEntity<>(param, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> getUserResult = restTemplate.exchange(
                "https://kapi.kakao.com/v2/user/me?property_keys",
                HttpMethod.GET,
                kakaoGetUserRequest,
                String.class
        );

        JSONObject jsonObject = new JSONObject(getUserResult.getBody());
        JSONObject kakaoAccount = new JSONObject(jsonObject.get("kakao_account").toString());
        JSONObject profile = new JSONObject(kakaoAccount.get("profile").toString());

        String id = jsonObject.get("id").toString();
        String email = kakaoAccount.get("email").toString();
        String nickname = profile.get("nickname").toString();
        String profileImageURL = profile.get("profile_image_url").toString();

    }

    @Override
    public void logout() {

    }
}
