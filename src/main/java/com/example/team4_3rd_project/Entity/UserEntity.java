package com.example.team4_3rd_project.Entity;


import com.example.team4_3rd_project.Constant.Role;
import com.example.team4_3rd_project.Dto.UserDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;

@Entity
@Getter
@Setter
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    @Column(unique = true)
    private String email;
    private String password;
    private String nickname;
    private String phoneNum;
    private String userIntroduce;
    @Enumerated(EnumType.STRING)
    private Role role;

    public static UserEntity createUser(UserDto userDto, PasswordEncoder passwordEncoder){
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(userDto.getUsername());
        userEntity.setEmail(userDto.getEmail());
        String password = passwordEncoder.encode(userDto.getPassword());
        userEntity.setPassword(password);
        userEntity.setPhoneNum(userDto.getPhoneNum());
        userEntity.setNickname(userDto.getNickname());
        userEntity.setUserIntroduce(null);
        userEntity.setRole(Role.USER);
        return userEntity;
    }
    public static UserDto changeToDto(UserEntity userEntity) {
        ModelMapper modelMapper = new ModelMapper();

        return modelMapper.map(userEntity, UserDto.class);
    }
}
