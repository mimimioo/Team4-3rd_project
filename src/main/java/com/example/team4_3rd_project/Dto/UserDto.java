package com.example.team4_3rd_project.Dto;

import com.example.team4_3rd_project.Entity.UserEntity;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

@Getter
@Setter
public class UserDto {
    private String username;
    private String email;
    private String password;
    private String nickname;
    private String phoneNum;
    private String userIntroduce;
    private String userProfileImg;

    public static UserEntity changeToEntity(UserDto userDto) {
        ModelMapper modelMapper = new ModelMapper();

        return modelMapper.map(userDto, UserEntity.class);
    }
}
