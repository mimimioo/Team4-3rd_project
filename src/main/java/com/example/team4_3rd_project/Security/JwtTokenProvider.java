package com.example.team4_3rd_project.Security;

import com.example.team4_3rd_project.Entity.UserEntity;
import com.example.team4_3rd_project.Repository.UserRepository;
import com.example.team4_3rd_project.Utils.JwtTokenUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JwtTokenProvider {
    private final UserRepository userRepository;

    public Authentication validateToken(String token) throws Exception {
        String clientToken = token;
        System.out.println(clientToken);
        String userEmail = JwtTokenUtil.checkJwt(clientToken).get("userEmail").toString();
        Optional<UserEntity> findAuthority = userRepository.findByEmail(userEmail);
        String authority = findAuthority.orElse(null).getRole().toString();

        // UsernamePasswordAuthenticationToken 생성
        // Principal: 사용자 정보 (여기서는 userEmail), Credentials: 패스워드 (여기서는 토큰), Authorities: 권한
        return new UsernamePasswordAuthenticationToken(userEmail, clientToken, List.of(new SimpleGrantedAuthority(authority)));
    }
}
