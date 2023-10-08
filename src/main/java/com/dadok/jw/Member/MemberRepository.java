package com.dadok.jw.Member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {

}
