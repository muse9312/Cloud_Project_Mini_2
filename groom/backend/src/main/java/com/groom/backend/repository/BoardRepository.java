package com.groom.backend.repository;

import java.util.List;

import com.groom.backend.model.Answer;
import com.groom.backend.model.Board;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;



public interface BoardRepository extends JpaRepository<Board, Long> {
 
}