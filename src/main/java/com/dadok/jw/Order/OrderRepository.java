package com.dadok.jw.Order;

import com.dadok.jw.Member.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<OrderEntity,Long> {

    Optional<List<OrderEntity>> findAllByMemberEntity(MemberEntity memberEntity);

}
