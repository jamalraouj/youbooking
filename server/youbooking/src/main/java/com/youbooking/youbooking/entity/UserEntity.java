package com.youbooking.youbooking.entity;

import com.youbooking.youbooking.classes.Message;
import lombok.*;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String password;
    private String email;
    private boolean isActive;
    private Role role;

    public UserEntity(String email ,String password, boolean isActive, Role role) {
        this.email = email;
        this.password = password;
        this.isActive = isActive;
        this.role = role;
    }

    @Transient
    private Message message;
}
