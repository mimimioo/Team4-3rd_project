package com.example.team4_3rd_project.Repository;

import com.example.team4_3rd_project.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByEmail(String email);
    Optional<UserEntity> findByUsername(String username);
    @Modifying
    @Query("DELETE FROM UserEntity u WHERE u.email = :email")
    int deleteByEmail(String email);
    @Modifying
    @Transactional
    @Query("UPDATE UserEntity u SET u.nickname = :userNickName, u.userIntroduce = :userIntroduce, u.userProfileImg = :userProfileImg WHERE u.email = :userEmail")
    void updateUser(@Param("userNickName") String userNickName, @Param("userIntroduce") String userIntroduce, @Param("userProfileImg") String userProfileImg,@Param("userEmail") String userEmail);
}
