package com.groom.backend.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.groom.backend.model.Board;
import com.groom.backend.model.User;
import com.groom.backend.repository.BoardRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin
@Controller
@RequestMapping("/api")
public class BoardController {
    @Autowired
	BoardRepository boardRepository;
	
	@Autowired
	HttpSession session;


    @GetMapping("/tableWrite")
	public String tableWrite() {
		return "tableWrite";
	}
	
	@PostMapping("/tableWrite")
	public String boardWrite(@ModelAttribute Board board) {
		User user = (User) session.getAttribute("user_info");
		String userId = user.getEmail();
		board.setUserId(userId);
		boardRepository.save(board);

		return "tableWrite";
	}
    






    @GetMapping("/tables")
	public String boardList(Model model) {
		// Sort sort = Sort.by(Sort.Direction.DESC, "id");
		// List<Board> list = boardRepository.findAll(sort);

		Sort sort = Sort.by(Order.desc("id"));
		List<Board> list = boardRepository.findAll(sort);
		
		model.addAttribute("list", list);
		return "tables";
	}
}
