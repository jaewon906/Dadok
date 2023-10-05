package com.dadok.jw.Common;

import jakarta.servlet.http.Cookie;
import org.json.JSONObject;
import org.springframework.stereotype.Component;

@Component
public class CreateCookie {
    public Cookie createCookie(String key, String value, int maxAge, String path, boolean httpOnly) {

       Cookie cookie = new Cookie(key, value);
       cookie.setPath(path);
       cookie.setMaxAge(maxAge);
       cookie.setHttpOnly(httpOnly);

       return cookie;
    }

    public Cookie deleteCookie(String key) {

        Cookie cookie = new Cookie(key,"");
        cookie.setMaxAge(0);
        cookie.setPath("/");

        return cookie;
    }
}
