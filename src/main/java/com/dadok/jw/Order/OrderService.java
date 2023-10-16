package com.dadok.jw.Order;

import com.fasterxml.jackson.core.JsonProcessingException;

public interface OrderService {
    void purchase(String items, String userNumber) throws JsonProcessingException;
}
