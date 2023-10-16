package com.dadok.jw.Member;

import jakarta.servlet.http.HttpServletRequest;

public interface MemberService {

    void autoSignUp(MemberDTO memberDTO);

    Object getSubscription(String userNumber);
}
