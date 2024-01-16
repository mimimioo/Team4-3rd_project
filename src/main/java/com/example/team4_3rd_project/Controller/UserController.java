package com.example.team4_3rd_project.Controller;

import com.example.team4_3rd_project.Dto.ResultDto;
import com.example.team4_3rd_project.Dto.UserDto;
import com.example.team4_3rd_project.Entity.UserEntity;
import com.example.team4_3rd_project.Service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

import static com.example.team4_3rd_project.Utils.JwtTokenUtil.generateToken;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResultDto registerUser(@RequestBody UserDto userForm) {
        System.out.println("회원가입 컨트롤러");
        System.out.println(userForm.getEmail());
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
    public ResultDto loginUser(@RequestBody UserDto userForm, HttpServletResponse response) {
        System.out.println(userForm.getEmail());
        System.out.println(userForm.getPassword());
        UserEntity user = UserDto.changeToEntity(userForm);

        ResultDto resultDto = userService.loginUser(user);
        if(resultDto.result) {
            System.out.println("로그인 성공");
            System.out.println("유저 이메일 : " + user.getEmail());
            String token = "Bearer" + generateToken(user.getEmail());
            System.out.println(token);

            Cookie cookie = new Cookie("Authorization", token);
            cookie.setHttpOnly(true);
            cookie.setSecure(true);
            cookie.setAttribute("SameSite", "None");
            cookie.setMaxAge(60 * 60 * 24);
            response.addCookie(cookie);
        }
        return resultDto;
    }

    @PostMapping("/logout")
    public ResultDto logoutUser(HttpServletResponse response) {
        ResultDto resultDto = new ResultDto();
        resultDto.setResult(true);
        resultDto.setMessage("로그아웃 하였습니다.");

        Cookie cookie = new Cookie("Authorization", "");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return resultDto;
    }

    @PostMapping("info/update")
    public ResultDto updateUser(@RequestBody UserDto userDto, Principal principal) {
        ResultDto resultDto = new ResultDto();
        userDto.setEmail(principal.getName());
        UserEntity userEntity = UserDto.changeToEntity(userDto);
        resultDto.setUserDto(userService.updateUser(userEntity));

        resultDto.result=true;

        return resultDto;
    }

    @PostMapping("/deleteUser")
    public ResultDto deleteUser(Principal principal, HttpServletResponse response) {
        ResultDto resultDto = new ResultDto();
        if(userService.deleteUser(principal.getName())==1) {
            resultDto.setResult(true);
            resultDto.setMessage("탈퇴되었습니다.");
        } else {
            resultDto.setResult(false);
            resultDto.setMessage("탈퇴 요청에 실패했습니다. 관리자에게 문의해주세요.");
        }

        Cookie cookie = new Cookie("Authorization", "");
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return resultDto;
    }

    @PostMapping("/auth")
    public ResultDto Test() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        ResultDto resultDto = new ResultDto();
        resultDto.setResult(true);
        resultDto.setMessage("인증 페이지 요청 성공!");
        return resultDto;
    }
}
