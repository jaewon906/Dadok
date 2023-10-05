package com.dadok.jw.Member;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Slf4j
public class MemberController {

    @GetMapping("/mySubscribe")
    public void getSubscribeInfo(HttpServletRequest request) {

        String menu = request.getParameter("menu");

        log.info("{}", menu);
    }

}
