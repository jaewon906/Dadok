package com.dadok.jw.Auth;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;

import java.util.Optional;

public interface KakaoOAuthService {

    Object login(Optional<LogInDTO.RequestDTO> logInDTO, HttpServletResponse response);

    KakaoOAuthDTO getAuthenticate(Optional<LogInDTO.RequestDTO> logInDTO);

    void logout();
}
