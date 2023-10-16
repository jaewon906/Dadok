package com.dadok.jw.Common;

import lombok.Getter;

@Getter
public enum HOMEURL {
    DEVELOPMENT("http://localhost:3000/home"), PRODUCTION("http://aws.com");

    private final String homeUrl;

    HOMEURL(String homeUrl){
        this.homeUrl=homeUrl;
    }
}
