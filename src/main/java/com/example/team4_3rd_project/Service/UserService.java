package com.example.team4_3rd_project.Service;

import com.example.team4_3rd_project.Dto.ResultDto;
import com.example.team4_3rd_project.Entity.UserEntity;
import com.example.team4_3rd_project.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;

import static com.example.team4_3rd_project.Utils.JwtTokenUtil.generateToken;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private void validateDuplicateMember(UserEntity user){
        Optional<UserEntity> findUser = userRepository.findByEmail(user.getEmail());
        UserEntity userInfo = findUser.orElse(null);
        if(userInfo != null){
            System.out.println(Objects.requireNonNull(userInfo).getUsername());
            throw new IllegalStateException("이미 가입된 회원입니다.");
        }
    }
    public boolean saveUser(UserEntity user){
        validateDuplicateMember(user);

        userRepository.save(user);

        return true;
    }

    public ResultDto loginUser(UserEntity userEntity) {
        // 반환 객체
        ResultDto resultDto = new ResultDto();
        // 조회 용도의 엔티티
        Optional<UserEntity> findUser = userRepository.findByEmail(userEntity.getEmail());
        UserEntity user = findUser.orElse(null);

        // 유저가 존재하고, 패스워드가 같다면..
        if(user != null && passwordEncoder.matches(userEntity.getPassword(), user.getPassword())) {
            // 토큰 생성
            resultDto.setResult(true);
            // resultDto 내부 UserDto 설정
            resultDto.setUserDto(UserEntity.changeToDto(user));
            resultDto.userDto.setPassword(null);
        } else {
            System.out.println("로그인 실패");
            resultDto.setResult(false);
            resultDto.setMessage("로그인 실패");
        }
        return resultDto;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserEntity> findUser = userRepository.findByUsername(username);
        UserEntity user = findUser.orElse(null);

        if(user == null){
            throw new UsernameNotFoundException(username);
        }

        return User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().toString())
                .build();
    }
}
