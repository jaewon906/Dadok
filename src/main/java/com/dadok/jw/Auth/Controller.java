package com.dadok.jw.Auth;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class Controller {

    private final KakaoOAuthServiceImpl kakaoOAuthServiceImpl;

    @GetMapping("/kakaoLogin")
    public ResponseEntity<String> oauthLogin(Optional<LogInDTO.RequestDTO> logInDTO, HttpServletRequest request){

       return kakaoOAuthServiceImpl.login(logInDTO, request);

    }

}
