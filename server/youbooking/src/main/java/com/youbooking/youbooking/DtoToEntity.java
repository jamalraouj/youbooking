package com.youbooking.youbooking;


import com.youbooking.youbooking.entity.UserEntity;
import com.youbooking.youbooking.service.dto.RegisterDTO;
import org.modelmapper.ModelMapper;

public class DtoToEntity {
    public static UserEntity userDtoToUser(RegisterDTO registerDTO) {
        ModelMapper modelMapper=new ModelMapper();
        return modelMapper.map(registerDTO, UserEntity.class);
    }


}
