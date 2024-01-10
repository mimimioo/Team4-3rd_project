package com.example.team4_3rd_project.Filter;

import com.example.team4_3rd_project.Security.JwtTokenProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class jwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider jwtTokenProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println("doFilterInternal 호출");
        // 요청 쿠키에서 Authorization을 얻어옴
        Cookie[] cookies = request.getCookies();
        String receiveToken = null;

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                System.out.println(cookie.getName());
                if ("Authorization".equals(cookie.getName())) {
                    String cookieValue = cookie.getValue();
                    if (cookieValue.startsWith("Bearer")) {
                        receiveToken = cookieValue.substring(6); // "Bearer "를 제외한 부분을 가져옴
                        System.out.println("리시브 토큰 : "+receiveToken);
                    }
                    break;
                }
            }
        }
        // receiveToken이 Authorization가 jwt 방식이 아닌 경우
        if (receiveToken == null) {
            System.out.println("filterChain.doFilter(request, response) 직전");
            filterChain.doFilter(request, response);
            System.out.println("filterChain.doFilter(request, response) 직후");
            return;
        }
        // Authentication 객체 얻어와서
        Authentication authentication;
        try {
            System.out.println("try 시작");
            authentication = getAuthentication(receiveToken);
            System.out.println("authentication 생성");
            // SecurityContextHolder 에 등록
            SecurityContextHolder.getContext().setAuthentication(authentication);
            System.out.println("SecurityContextHolder 등록");
            filterChain.doFilter(request, response);
            System.out.println("filterChain 동작");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private Authentication getAuthentication(String receiveToken) throws Exception {
        System.out.println("데이터 확인, 리시브 토큰 : " + receiveToken);
        return jwtTokenProvider.validateToken(receiveToken);
    }
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        if(request.getServletPath().equals("/user/login")) {
            return true;
        } else if(request.getServletPath().equals("/user/register")) {
            return true;
        } else if(request.getServletPath().equals("/user/logout")) {
            return true;
        }
        return false;
    }
}
