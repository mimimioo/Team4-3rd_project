package com.example.team4_3rd_project.Controller;

import com.example.team4_3rd_project.Dto.ResultDto;
import com.example.team4_3rd_project.Dto.UserDto;
import com.example.team4_3rd_project.Entity.UserEntity;
import com.example.team4_3rd_project.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResultDto registerUser(@RequestBody UserDto userForm) {
        ResultDto resultDto = new ResultDto();
        UserEntity user = UserEntity.createUser(userForm, passwordEncoder);

        if(userService.saveUser(user)) {
            resultDto.setMessage("회원가입이 완료되었습니다.");
        } else {
            resultDto.setMessage("회원가입 실패..");
        }

        return resultDto;
    }
    @PostMapping("/login")
    public ResultDto loginUser(@RequestBody UserDto userForm) {
        System.out.println(userForm.getEmail());
        System.out.println(userForm.getPassword());
        UserEntity user = UserDto.changeToEntity(userForm);

        ResultDto resultDto = userService.loginUser(user);
        System.out.println(resultDto.getToken());
        System.out.println(resultDto.userDto.getEmail());
        System.out.println(resultDto.getUserDto().getUsername());

        return resultDto;
    }

    @PostMapping("/auth")
    public ResultDto Test() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        ResultDto resultDto = new ResultDto();
        resultDto.setResult(true);
        resultDto.setToken(authentication.getCredentials().toString());
        resultDto.setMessage("인증 페이지 요청 성공!");
        return resultDto;
    }
}
