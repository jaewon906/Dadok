package com.dadok.jw.Auth;

import com.dadok.jw.Common.CreateCookie;
import com.dadok.jw.Common.CreateUserNumber;
import com.dadok.jw.Common.HOMEURL;
import com.dadok.jw.Common.LogoutFailedException;
import com.dadok.jw.Member.MemberDTO;
import com.dadok.jw.Member.MemberRepository;
import com.dadok.jw.Member.MemberServiceImpl;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@Component
@Slf4j
public class AuthServiceImpl implements KakaoOAuthService{

    private final CreateCookie cookie;
    private final MemberServiceImpl memberService;
    private final MemberRepository memberRepository;
    @Override
    public ResponseEntity<Object> login(Optional<LogInDTO.RequestDTO> logInDTO, HttpServletResponse response){

        if (logInDTO.isPresent()) {

            KakaoOAuthDTO authenticate = getAuthenticate(logInDTO);

            response.addCookie(cookie.createCookie("accessToken", authenticate.getAccess_token(), 21600 ,"/",true));
            response.addCookie(cookie.createCookie("refreshToken", authenticate.getRefresh_token(), 5184000 ,"/",true));

            JWTFilter jwtFilter = new JWTFilter(cookie, memberRepository);
            Map<String, String> userInfo = jwtFilter.getUserInfo(authenticate.getAccess_token(), response);

            MemberDTO memberDTO = new MemberDTO();
            memberDTO.setEmail(userInfo.get("email"));
            memberDTO.setNickname(userInfo.get("nickname"));
            memberDTO.setUserNumber(userInfo.get("userNumber"));

            memberService.autoSignUp(memberDTO);


            return ResponseEntity.ok().build();

        } else

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response) {

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String> exchange = restTemplate.exchange(
                "https://kauth.kakao.com/oauth/logout?client_id=ba1dbc690bf2094c4d036e94b7c1e6bc"+"&logout_redirect_uri="+HOMEURL.DEVELOPMENT.getHomeUrl(),
                HttpMethod.GET,
               null,
                String.class
        );

        if(exchange.getStatusCode().is3xxRedirection()){
            response.addCookie(cookie.deleteCookie("accessToken"));
            response.addCookie(cookie.deleteCookie("refreshToken"));
            response.addCookie(cookie.deleteCookie("userInfo"));
        }
        else{
            throw new LogoutFailedException("로그아웃 실패");
        }


    }
    @Override
    public KakaoOAuthDTO getAuthenticate(Optional<LogInDTO.RequestDTO> logInDTO) {

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

}
