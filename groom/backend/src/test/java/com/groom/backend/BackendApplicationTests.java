package com.groom.backend;

import java.util.Optional;

import com.groom.backend.model.Board;
import com.groom.backend.repository.BoardRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BackendApplicationTests {

	@Autowired
	BoardRepository boardRepository;

	@Test
	void contextLoads() {
		System.out.println(boardRepository.findTopByOrderByViewCntDesc());
		// boardRepository.findAll();
		// boardRepository.updateView(65l);

	}
	@Test
	void contextLoads2() {
		// boardRepository.findAll();
		Optional<Board> opt = boardRepository.findById(65l);
		Board board = opt.get();
		board.setViewCnt(board.getViewCnt() + 1);
		boardRepository.save(board);
	}

}
