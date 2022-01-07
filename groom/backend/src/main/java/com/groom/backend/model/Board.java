package com.groom.backend.model;

import java.sql.Timestamp;
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
public class Board {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String title;
	private String content;
	private String userId;
	private long viewCnt;

 //@Temporal(TemporalType.TIMESTAMP)
	// Date nowDate;

   @JsonFormat(pattern="yyyy -MM -dd")
	private Date creDate;
	

	
	// @ManyToOne
	// User user;
}