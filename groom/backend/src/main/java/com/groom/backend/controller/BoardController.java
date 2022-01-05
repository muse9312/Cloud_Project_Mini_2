package com.groom.backend.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import com.groom.backend.model.Board;
import com.groom.backend.model.User;
import com.groom.backend.repository.BoardRepository;

import org.aspectj.weaver.patterns.TypePatternQuestions.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
@RequestMapping("/board")
public class BoardController {
    @Autowired
    BoardRepository boardRepository;

    @Autowired
    HttpSession session;


    //write
    @GetMapping("/tableWrite")
    public String tableWrite() {
        return "tableWrite";
    }

    @PostMapping("/tableWrite")
    @ResponseBody
    public Board boardWrite(@ModelAttribute Board board) {
        User user = (User) session.getAttribute("user_info");
        // String userId = user.getEmail();
        String userId = "익명";
        board.setUserId(userId);
        boardRepository.save(board);

        return board;
    }


    // //list
    


    @GetMapping("/tables")
	@ResponseBody
	public List<Board> boardList() {
		Sort sort = Sort.by(Order.desc("id"));
		List<Board> list = boardRepository.findAll(sort);
		return list;
	}
    @GetMapping("/table/detail")
	public String boardDetail(Model model, Long id) {
		Optional<Board> opt = boardRepository.findById(id);
		if(opt.isPresent()) {
			model.addAttribute("question", opt.get());
			
		}
		return "table_detail";
	}

}
