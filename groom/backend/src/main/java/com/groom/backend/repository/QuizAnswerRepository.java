package com.groom.backend.repository;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.groom.backend.model.Answer;
import com.groom.backend.model.Board;
import com.groom.backend.model.QuizAnswer;
import com.groom.backend.model.QuizBoard;

public interface QuizAnswerRepository extends JpaRepository<QuizAnswer, Long> {

    List<QuizAnswer> findByQuizBoard(QuizBoard quizBoard, Sort sort);
   
}
