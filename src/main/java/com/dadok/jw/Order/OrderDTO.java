package com.dadok.jw.Order;

import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
public class OrderDTO {

    private String id;

    private String title;

    private String text;

    private String url;

    private int price;

    private int discount;

    private String category;

    private String checked;

    public static List<OrderDTO> EntityToDTO(List<OrderEntity> orderEntities) {

        List<OrderDTO> orderDTOS = new ArrayList<>();

        for(OrderEntity orderEntity : orderEntities){
            ModelMapper modelMapper = new ModelMapper();
            OrderDTO map = modelMapper.map(orderEntity, OrderDTO.class);

            orderDTOS.add(map);
        }

        return orderDTOS;

    }
}
