package com.groom.backend.repository;

import java.util.List;

import com.groom.backend.model.Answer;
import com.groom.backend.model.Board;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;



public interface BoardRepository extends JpaRepository<Board, Long> {
    // @Modifying
    // @Query("update board set hit_cnt = hit_cnt+1 where id = ${id}")
    // int updateView(Long id);
}