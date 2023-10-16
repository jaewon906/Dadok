package com.dadok.jw.Order;

import com.dadok.jw.Member.MemberEntity;
import com.dadok.jw.Member.MemberRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
@Slf4j
public class OrderServiceImpl implements OrderService{

    private final MemberRepository memberRepository;
    private final OrderRepository orderRepository;

    @Override
    public void purchase(String items, String userNumber) throws JsonProcessingException {
        String decoded = URLDecoder.decode(items, StandardCharsets.UTF_8);
        log.info("{}", decoded);
        log.info("{}", userNumber);

        Optional<MemberEntity> allByUserNumber = memberRepository.findAllByUserNumber(userNumber);

        if(allByUserNumber.isPresent()){
            ObjectMapper objectMapper = new ObjectMapper();
            List<OrderDTO> orderDTOS = objectMapper.readValue(decoded, new TypeReference<>() {
            });

            for(OrderDTO orderDTO : orderDTOS){
//                String productId = orderDTO.getId();
//                String img = orderDTO.getUrl();
//                String title = orderDTO.getTitle();
//                String discription = orderDTO.getText();
//                String category = orderDTO.getCategory();
//                int price = orderDTO.getPrice();
//                int discount = orderDTO.getDiscount();

                orderRepository.save(OrderEntity.DTOToEntity(orderDTO,allByUserNumber.get()));
            }
        }
    }
}
