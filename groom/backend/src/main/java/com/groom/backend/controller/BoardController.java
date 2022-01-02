// package com.groom.backend.controller;

// import org.springframework.stereotype.Controller;

// @Controller
// public class BoardController {
//     @GetMapping("/board/write")
// 	public String boardWrite() {
// 		return "board/write";
// 	}
	
// 	@PostMapping("/board/write")
// 	public String boardWrite(@ModelAttribute Board board) {
// 		User user = (User) session.getAttribute("user_info");
// 		String userId = user.getEmail();
// 		board.setUserId(userId);
// 		boardRepository.save(board);

// 		return "board/write";
// 	}
// }
