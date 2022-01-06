package com.groom.backend.repository;

import java.util.List;

import com.groom.backend.model.FreeBoard;
import com.groom.backend.model.NoticeBoard;
import com.groom.backend.model.QuizBoard;


import org.springframework.data.jpa.repository.JpaRepository;



public interface FreeBoardRepository extends JpaRepository<FreeBoard, Long> {

 
}