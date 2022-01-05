package com.groom.backend.repository;

import com.groom.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MyPageRepository extends JpaRepository<User , Long>{
    
}
