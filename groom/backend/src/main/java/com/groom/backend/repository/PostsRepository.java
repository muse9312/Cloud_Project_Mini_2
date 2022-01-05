// package com.groom.backend.repository;

// import org.springframework.data.jpa.repository.JpaRepository;

// public interface PostsRepository extends JpaRepository<Posts, Long> { ... @Modifying @Query("update Posts p set p.view = p.view + 1 where p.id = :id") 
// int updateView(Long id); }


