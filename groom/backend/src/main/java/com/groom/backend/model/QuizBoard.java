package com.groom.backend.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Entity
@Data
public class QuizBoard {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String title;
	private String content;
	private String userId;
	private String content2;
	@JsonFormat(pattern="yyyy -MM -dd")
	private Date creDate;
	// @Temporal(TemporalType.TIMESTAMP)
	// Date nowDate;
	
	// @ManyToOne
	// User user;
}