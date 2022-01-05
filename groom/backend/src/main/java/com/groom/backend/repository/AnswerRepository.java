package com.groom.backend.repository;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.groom.backend.model.Answer;
import com.groom.backend.model.Board;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findByBoard(Board board, Sort sort);
    // List<Answer> findByBoard(Board board);
}
