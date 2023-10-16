package com.dadok.jw.Order;

import com.dadok.jw.Member.MemberEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.sql.Timestamp;

@Entity
@Table(name="orders")
@Getter
@Setter
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String productId;

    @Column
    private String title;

    @Column
    private String text;

    @Column
    private String url;

    @Column
    private int price;

    @Column
    private int discount;

    @Column
    private String category;

    @Column
    private Timestamp orderedTime;

    @ManyToOne()
    @JoinColumn(name = "member_ID")
    private MemberEntity memberEntity;

    public static OrderEntity DTOToEntity(OrderDTO orderDTO, MemberEntity memberEntity) {
        OrderEntity orderEntity = new OrderEntity();

        orderEntity.setTitle(orderDTO.getTitle());
        orderEntity.setProductId(orderDTO.getId());
        orderEntity.setText(orderDTO.getText());
        orderEntity.setUrl(orderDTO.getUrl());
        orderEntity.setPrice(orderDTO.getPrice());
        orderEntity.setDiscount(orderDTO.getDiscount());
        orderEntity.setCategory(orderDTO.getCategory());
        orderEntity.setOrderedTime(new Timestamp(System.currentTimeMillis()));
        orderEntity.setMemberEntity(memberEntity);

        return orderEntity;

    }


}
