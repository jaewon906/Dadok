package com.dadok.jw.Common;

public class CreateUserNumber {

    public static String createUserNumber(){

        StringBuilder result = new StringBuilder();

        for(int i=0; i<10; i++){
            result.append((int)Math.floor(Math.random()*10));
        }

        return result.toString();
    }

}
