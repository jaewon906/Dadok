package com.dadok.jw.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    @Override
    public void autoSignUp(MemberDTO memberDTO) {

        MemberEntity memberEntity = MemberEntity.DTOtoEntity(memberDTO);

        memberRepository.save(memberEntity);
    }
}
