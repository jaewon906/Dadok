package com.dadok.jw.Auth;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final KakaoOAuthServiceImpl kakaoOAuthServiceImpl;

    @GetMapping("/kakaoLogin")
    public Object oauthLogin(Optional<LogInDTO.RequestDTO> logInDTO, HttpServletResponse  response){

       return kakaoOAuthServiceImpl.login(logInDTO, response);

    }

}
