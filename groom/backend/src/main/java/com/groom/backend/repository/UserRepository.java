package com.groom.backend.repository;

import com.groom.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmailAndPwd(String email, String pwd);
}
