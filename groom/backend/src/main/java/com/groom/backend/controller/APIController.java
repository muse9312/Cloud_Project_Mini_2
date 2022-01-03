
package com.groom.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

 import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import java.util.List;

import javax.servlet.http.HttpSession;


 import com.groom.backend.model.Board;
 import com.groom.backend.repository.BoardRepository;
import com.groom.backend.repository.UserRepository;


@Controller
@RequestMapping("/")
public class APIController {
// 	@Autowired
// 	UserRepository userRepository;


// @Autowired
// 	BoardRepository boardRepository;


// 	@Autowired
// 	HttpSession session;

// 	@GetMapping("/tables")
// 	@ResponseBody
// 	public List<Board> boardList() {
// 		Sort sort = Sort.by(Order.desc("id"));
// 		List<Board> list = boardRepository.findAll(sort);
// 		return list;
// 	}
}

