package com.youbooking.youbooking.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String password;
    private String email;
    private boolean isActive;
    private Role role;

    public UserEntity(String password, String email, boolean isActive, Role role) {
        this.password = password;
        this.email = email;
        this.isActive = isActive;
        this.role = role;
    }
}
