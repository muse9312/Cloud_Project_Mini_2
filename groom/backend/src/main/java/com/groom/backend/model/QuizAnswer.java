package com.groom.backend.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class QuizAnswer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;
	
	String content;
	String content2;
	// Date createDate;
    // public void setUser(User user) {
    // }
    // public void setBoard(Board board) {
    // }
	
	@ManyToOne
	User user;
	
	@ManyToOne
	QuizBoard quizBoard;
}
