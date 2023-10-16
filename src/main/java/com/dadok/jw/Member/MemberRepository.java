package com.dadok.jw.Member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {

    Optional<MemberEntity> findAllByEmail(String email);

    Optional<MemberEntity> findAllByUserNumber(String userNumber);
}
