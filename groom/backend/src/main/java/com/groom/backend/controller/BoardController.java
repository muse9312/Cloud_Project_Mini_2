package com.groom.backend.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import com.groom.backend.model.Answer;
// import com.groom.backend.model.Answer;
import com.groom.backend.model.Board;
import com.groom.backend.model.QuizAnswer;
import com.groom.backend.model.QuizBoard;
import com.groom.backend.model.User;
import com.groom.backend.repository.AnswerRepository;
// import com.groom.backend.repository.AnswerRepository;
import com.groom.backend.repository.BoardRepository;
import com.groom.backend.repository.QuizAnswerRepository;
import com.groom.backend.repository.QuizBoardRepository;

import org.aspectj.weaver.patterns.TypePatternQuestions.Question;
import org.hibernate.annotations.Tables;
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
    @Autowired
    QuizBoardRepository quizBoardRepository;
    @Autowired
    QuizAnswerRepository quizAnswerRepository;

    @Autowired
    HttpSession session;

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
    @GetMapping("/quizTableWrite")
    public String quizTableWrite() {
        return "quizTableWrite";
    }

    @PostMapping("/quizTableWrite")
    @ResponseBody
    public QuizBoard quizTableWrite(@ModelAttribute QuizBoard quiz_board) {
        User user = (User) session.getAttribute("user_info");
        // String userId = user.getName();
        String userId = "익명";
        quiz_board.setUserId(userId);
        quizBoardRepository.save(quiz_board);

        return quiz_board;
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
    @GetMapping("/quizAnswer")
    @ResponseBody
    public List<QuizAnswer> quizAnswerList(@ModelAttribute QuizAnswer quizAnswer, Long quizBoard_id) {
        QuizBoard quizBoard = quizBoardRepository.findById(quizBoard_id).get();
        Sort sort = Sort.by(Order.desc("id"));
        List<QuizAnswer> list = quizAnswerRepository.findByQuizBoard( quizBoard , sort);
        return list;
    }

    @PostMapping("/quizAnswer")
    @ResponseBody
    public QuizAnswer quizAnswer(@ModelAttribute QuizAnswer quizAnswer, Long quizBoard_id) {
        // User user = (User) session.getAttribute("user_info");
        // // String userId = user.getName();
        QuizBoard quziBoard = quizBoardRepository.findById(quizBoard_id).get();
        String content = quizAnswer.getContent();
        quizAnswer.setContent(content);
        quizAnswer.setQuizBoard(quziBoard);
        quizAnswerRepository.save(quizAnswer);

        return quizAnswer;
    }

    // //list

    @GetMapping("/tables")
    @ResponseBody
    public List<Board> boardList() {
        Sort sort = Sort.by(Order.desc("id"));
        List<Board> list = boardRepository.findAll(sort);
        return list;

    }
    @GetMapping("/quizTables")
    @ResponseBody
    public List<QuizBoard> quizBoardList() {
        Sort sort = Sort.by(Order.desc("id"));
        List<QuizBoard> list = quizBoardRepository.findAll(sort);
        return list;

    }

    @GetMapping("/table/detail")
    @ResponseBody
    public Board boardDetail(Model model, Long id) {
        Optional<Board> opt = boardRepository.findById(id);

        return opt.get();
    }
    @GetMapping("/table/quizDetail")
    @ResponseBody
    public QuizBoard quizBoardDetail(Model model, Long id) {
        Optional<QuizBoard> opt = quizBoardRepository.findById(id);

        return opt.get();
    }

    //수정 


    @PostMapping("/table/update/{id}")
    @ResponseBody
    public Board tableUpdate(
            @ModelAttribute Board board, @PathVariable("id") long id) {
        System.out.println(board);
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

    @PostMapping("/quizUpdate/{id}")
    @ResponseBody
    public QuizBoard quizUpdate(
            @ModelAttribute QuizBoard quizBoard, @PathVariable("id") long id) {
       
        User user = (User) session.getAttribute("user_info");
        // String userId = user.getEmail();
        String userId = "익명";
        // String content = board.getContent();
        quizBoard.setUserId(userId);
        quizBoard.setId(id);
        // board.setContent(content);
        quizBoardRepository.save(quizBoard);
        return quizBoard;
    }


    //삭제

    @GetMapping("/table/delete")
    @ResponseBody
    public String tableDelete(@PathVariable("id") long id) {
        boardRepository.deleteById(id);
        return "table/delete";
    }

}
