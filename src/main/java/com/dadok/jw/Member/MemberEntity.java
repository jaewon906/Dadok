package com.dadok.jw.Member;

import com.dadok.jw.Order.OrderEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

import java.util.List;

@Entity
@Table(name = "member")
@Getter
@Setter
public class MemberEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    @Column
    private String nickname;

    @Column(unique = true)
    private String userNumber;

    @JsonIgnore
    @OneToMany(mappedBy = "memberEntity",cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderEntity> order;


    public static MemberEntity DTOtoEntity(MemberDTO memberDTO) {

        ModelMapper modelmapper = new ModelMapper();

        return modelmapper.map(memberDTO, MemberEntity.class);
    }

}
