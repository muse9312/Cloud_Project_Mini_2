package com.groom.backend.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

// import com.groom.backend.Service.BoardService;
import com.groom.backend.model.Answer;
// import com.groom.backend.model.Answer;
import com.groom.backend.model.Board;
import com.groom.backend.model.User;
import com.groom.backend.repository.AnswerRepository;
// import com.groom.backend.repository.AnswerRepository;
import com.groom.backend.repository.BoardRepository;

import org.aspectj.weaver.patterns.TypePatternQuestions.Question;
import org.hibernate.annotations.Tables;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
@RequestMapping("/board")
public class BoardController {
    @Autowired
    BoardRepository boardRepository;

    @Autowired
    AnswerRepository answerRepository;

    // @Autowired
    // BoardService boardService;

    @Autowired
    HttpSession session;



    // @GetMapping("/admin/index")
    // public String index(Long id, Model model, @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {

    //     model.addAttribute("view", boardService.updateView(id));
 
    //     return "/admin/index";
    // }


    // write
    @GetMapping("/tableWrite")
    public String tableWrite() {
        return "tableWrite";
    }

    @PostMapping("/tableWrite")
    @ResponseBody
    public Board boardWrite(@ModelAttribute Board board) {
        User user = (User) session.getAttribute("user_info");
        // String userId = user.getName();
        String userId = "익명";
        board.setUserId(userId);
        boardRepository.save(board);

        return board;
    }

    @GetMapping("/answer")
    @ResponseBody
    public List<Answer> answerList(@ModelAttribute Answer answer, Long board_id) {
        Board board = boardRepository.findById(board_id).get();
        Sort sort = Sort.by(Order.desc("id"));
        List<Answer> list = answerRepository.findByBoard(board, sort);
        return list;
    }

    @PostMapping("/answer")
    @ResponseBody
    public Answer answer(@ModelAttribute Answer answer, Long board_id) {
        // User user = (User) session.getAttribute("user_info");
        // // String userId = user.getName();
        Board board = boardRepository.findById(board_id).get();
        String content = answer.getContent();
        answer.setContent(content);
        answer.setBoard(board);
        answerRepository.save(answer);

        return answer;
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
    @ResponseBody
    public Board boardDetail(Model model, Long id) {
        Optional<Board> opt = boardRepository.findById(id);
        return opt.get();
    }

    //수정 
    @GetMapping("/table/update")
    @ResponseBody
	public String boardUpdate(Model model, @PathVariable("id") long id) {
		Optional<Board> data = boardRepository.findById(id);
		Board board = data.get();
		model.addAttribute("board", board);
		return "table/update";
	}

    @PostMapping("/table/update")
    @ResponseBody
    public Board tableUpdate(
            @ModelAttribute Board board, @PathVariable("id") long id) {
        User user = (User) session.getAttribute("user_info");
        // String userId = user.getEmail();
        String userId = "익명";
        // String content = board.getContent();
        board.setUserId(userId);
        board.setId(id);
        // board.setContent(content);
        boardRepository.save(board);
        return board;
    }


    //삭제

    // @GetMapping("/table/delete/{id}")
    // public String tableDelete(@PathVariable("id") long id) {
    //     boardRepository.deleteById(id);
    //     return ;
    // }

}
