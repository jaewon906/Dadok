package com.dadok.jw.Auth;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class KakaoOAuthDTO {
    private String access_token;

    private String expires_in;

    private String refresh_token;

    private String refresh_token_expires_in;

    private String scope;

    private String token_type;

}
