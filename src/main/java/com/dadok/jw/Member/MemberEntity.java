package com.dadok.jw.Member;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

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


    public static MemberEntity DTOtoEntity(MemberDTO memberDTO) {

        ModelMapper modelmapper = new ModelMapper();

        return modelmapper.map(memberDTO, MemberEntity.class);
    }

}
