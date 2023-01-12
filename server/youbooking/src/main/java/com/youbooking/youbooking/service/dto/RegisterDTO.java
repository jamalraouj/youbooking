package com.youbooking.youbooking.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class RegisterDTO {
    private String email;
    private String password;
    private boolean areYouProprietary = false;

    public RegisterDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
