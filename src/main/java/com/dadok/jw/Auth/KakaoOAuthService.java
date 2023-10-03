package com.dadok.jw.Auth;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface KakaoOAuthService {

    ResponseEntity<String> login(Optional<LogInDTO.RequestDTO> logInDTO, HttpServletRequest request);

    KakaoOAuthDTO getAuthenticate(Optional<LogInDTO.RequestDTO> logInDTO, HttpServletRequest request);

    void getUserInfo(KakaoOAuthDTO kakao);

    void logout();
}
