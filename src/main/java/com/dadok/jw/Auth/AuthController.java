package com.dadok.jw.Auth;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthServiceImpl authServiceImpl;

    @GetMapping("reload")
    public void reloadUserInfo(){}


    @GetMapping("/kakaoLogin")
    public Object oauthLogin(Optional<LogInDTO.RequestDTO> logInDTO, HttpServletResponse response) {

        return authServiceImpl.login(logInDTO, response);

    }

    @PostMapping("/logout")
    public void logOut(HttpServletRequest request, HttpServletResponse response) {
        authServiceImpl.logout(request, response);
    }

}
