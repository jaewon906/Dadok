package com.dadok.jw.Member;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberServiceImpl memberService;

    @GetMapping("/user/mySubscribe")
    public void getSubscribeInfo(HttpServletRequest request) {

        String menu = request.getParameter("menu");

        log.info("{}", menu);
    }

    @GetMapping("/user/getSubs")
    public Object getSubscription(String userNumber) {

        return memberService.getSubscription(userNumber);

    }

}
