package com.dadok.jw.Security;

import com.dadok.jw.Auth.JWTFilter;
import com.dadok.jw.Common.CreateCookie;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final CreateCookie cookie;

    @Bean
    public SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity.csrf(csrf -> csrf.disable())
                .cors(cors -> cors.disable())
                .formLogin(form -> form.disable())
                .authorizeHttpRequests(
                        http -> {
                            http.requestMatchers("/api/kakaoLogin").permitAll();
                            http.requestMatchers("/api/logout").authenticated();
                        }
                )
                .addFilterBefore(new JWTFilter(cookie), UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
