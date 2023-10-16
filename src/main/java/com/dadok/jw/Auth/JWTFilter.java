package com.dadok.jw.Auth;

import com.dadok.jw.Common.CreateCookie;
import com.dadok.jw.Common.CreateUserNumber;
import com.dadok.jw.Member.MemberEntity;
import com.dadok.jw.Member.MemberRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.*;

@Slf4j
@RequiredArgsConstructor
public class JWTFilter extends OncePerRequestFilter {

    private final CreateCookie cookie;
    private final MemberRepository memberRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        Cookie[] cookies = request.getCookies();
        String accessToken = "";
        String refreshToken = "";

        try{

            for (Cookie cookie : cookies) {

                switch (cookie.getName()) {
                    case "accessToken" -> accessToken = cookie.getValue();
                    case "refreshToken" -> refreshToken = cookie.getValue();
                }

            }

        }catch (NullPointerException e){

            log.info("local is null but, it`s ok");

        }

        accessTokenValidation(accessToken, refreshToken, response);

        filterChain.doFilter(request, response);
    }

    private void accessTokenValidation(String accessToken, String refreshToken, HttpServletResponse response) {

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.AUTHORIZATION, "Bearer ${" + accessToken + "}");

        HttpEntity<String> httpEntity = new HttpEntity<>(headers);

        RestTemplate rt = new RestTemplate();

        try {

            rt.exchange("https://kapi.kakao.com/v1/user/access_token_info",
                    HttpMethod.GET,
                    httpEntity,
                    String.class);

            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken("", "", List.of(new SimpleGrantedAuthority("ROLE_" + "USER")));
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

            log.info("엑세스토큰 인증 성공");

            getUserInfo(accessToken, response);


        } catch (HttpClientErrorException e) {

            if (e.getStatusCode().isSameCodeAs(HttpStatusCode.valueOf(401))) {

                log.info("엑세스 토큰 인증에 실패하여 리프레시 토큰 인증 진행합니다.");
                refreshTokenValidation(refreshToken, response);
            } else {

                log.error("일시적인 장애가 발생하였거나 엑세스토큰 형식이 부적절합니다.");

                response.addCookie(cookie.deleteCookie("userInfo"));

            }
        }

    }

    public void refreshTokenValidation(String refreshToken, HttpServletResponse response) {

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "application/x-www-form-urlencoded;charset=utf-8");
        headers.add(HttpHeaders.AUTHORIZATION, "Bearer ${" + refreshToken + "}");

        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
        param.add("grant_type", "refresh_token");
        param.add("client_id", "ba1dbc690bf2094c4d036e94b7c1e6bc");
        param.add("refresh_token", refreshToken);

        HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(param, headers);

        RestTemplate rt = new RestTemplate();

        try {

            ResponseEntity<String> resFromKakao = rt.exchange(
                    "https://kauth.kakao.com/oauth/token",
                    HttpMethod.POST,
                    httpEntity,
                    String.class);

            JSONObject jsonObject = new JSONObject(resFromKakao.getBody());

            log.info("리프레시 인증에 성공했습니다.");
            log.info("{}", jsonObject);


            try {

                Cookie access = cookie.createCookie("accessToken", jsonObject.getString("access_token"), jsonObject.getInt("expires_in"), "/", true);
                response.addCookie(access);

                getUserInfo(jsonObject.getString("access_token"), response);

                Cookie refresh = cookie.createCookie("refreshToken", jsonObject.getString("refresh_token"), jsonObject.getInt("refresh_token_expires_in"), "/", true);
                response.addCookie(refresh);


            } catch (JSONException jsonException) {

                log.info("리프레시 토큰 유효기간이 1개월 이상 남았습니다.");

            }

            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken("", "", List.of(new SimpleGrantedAuthority("ROLE_" + "USER")));
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

        } catch (HttpClientErrorException e) {

            log.error("리프레시 토큰 인증 실패");

            response.addCookie(cookie.deleteCookie("userInfo"));
        }

    }

    public Map<String, String> getUserInfo(String accessToken, HttpServletResponse response){

        Map<String, String> userInfoJSON = new HashMap<>();

        HttpHeaders headers = new HttpHeaders();

        headers.add(HttpHeaders.AUTHORIZATION, "Bearer" + " ${"+accessToken+"}"); //Bearer 타입의 엑세스토큰
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
        String userNumber = getUserNumber(email);

        userInfoJSON.put("id", id);
        userInfoJSON.put("email", email);
        userInfoJSON.put("nickname", nickname);
        userInfoJSON.put("profileImageURL", profileImageURL);
        userInfoJSON.put("userNumber", userNumber);

        String encoded = Base64.getEncoder().encodeToString(userInfoJSON.toString().getBytes());

        response.addCookie(cookie.createCookie("userInfo", encoded,21599,"/",false));

        return userInfoJSON;

    }

    private String getUserNumber(String email){
        Optional<MemberEntity> allByEmail = memberRepository.findAllByEmail(email);

        if(allByEmail.isEmpty()){
            return CreateUserNumber.createUserNumber();
        }
        else{
            return allByEmail.get().getUserNumber();
        }

    }

}
