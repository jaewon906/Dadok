//package com.dadok.jw.Security;
//
//import com.dadok.jw.Auth.JWTFilter;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@EnableWebSecurity
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {
//        return httpSecurity.csrf(csrf -> csrf.disable())
//                .cors(cors -> cors.disable())
//                .formLogin(form -> form.disable())
//                .authorizeHttpRequests(
//                        http -> {
//                            http.requestMatchers("/api/kakaoOAuthLogin").permitAll();
//                        }
//                )
//                .addFilterBefore(new JWTFilter(), UsernamePasswordAuthenticationFilter.class)
//                .build();
//    }
//}
