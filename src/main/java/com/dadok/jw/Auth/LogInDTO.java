package com.dadok.jw.Auth;

import lombok.Getter;
import lombok.Setter;


public class LogInDTO {
    @Getter
    @Setter
    static class RequestDTO{
        private String code;
    }
}
