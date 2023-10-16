package com.dadok.jw.Member;

import com.dadok.jw.Common.UserNotFoundException;
import com.dadok.jw.Order.OrderDTO;
import com.dadok.jw.Order.OrderEntity;
import com.dadok.jw.Order.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final OrderRepository orderRepository;

    @Override
    public void autoSignUp(MemberDTO memberDTO) {

        MemberEntity memberEntity = MemberEntity.DTOtoEntity(memberDTO);

        Optional<MemberEntity> allByEmail = memberRepository.findAllByEmail(memberEntity.getEmail());

        if(allByEmail.isEmpty()){
            memberRepository.save(memberEntity);
        }


    }

    @Override
    public Object getSubscription(String userNumber) {

        Optional<MemberEntity> allByUserNumber = memberRepository.findAllByUserNumber(userNumber);

        if(allByUserNumber.isPresent()){
            Optional<List<OrderEntity>> allByMemberEntity = orderRepository.findAllByMemberEntity(allByUserNumber.get());

            if(allByMemberEntity.isPresent()){
                return OrderDTO.EntityToDTO(allByMemberEntity.get());
            }
            else{
                return ResponseEntity.ok();
            }
        }
        else{
            throw new UserNotFoundException("유저가 존재하지 않습니다.");
        }
    }
}
