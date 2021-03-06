package com.groom.backend.controller;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import com.groom.backend.model.Answer;
// import com.groom.backend.model.Answer;
import com.groom.backend.model.Board;
import com.groom.backend.model.FreeAnswer;
import com.groom.backend.model.FreeBoard;
import com.groom.backend.model.NoticeBoard;
import com.groom.backend.model.QuizAnswer;
import com.groom.backend.model.QuizBoard;
import com.groom.backend.model.User;
import com.groom.backend.repository.AnswerRepository;
// import com.groom.backend.repository.AnswerRepository;
import com.groom.backend.repository.BoardRepository;
import com.groom.backend.repository.FreeAnswerRepository;
import com.groom.backend.repository.FreeBoardRepository;
import com.groom.backend.repository.NoticeBoardRepository;
import com.groom.backend.repository.QuizAnswerRepository;
import com.groom.backend.repository.QuizBoardRepository;

import org.apache.commons.logging.Log;
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
import org.springframework.web.bind.annotation.DeleteMapping;
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
    FreeAnswerRepository freeAnswerRepository;
    @Autowired
    QuizBoardRepository quizBoardRepository;
    @Autowired
    QuizAnswerRepository quizAnswerRepository;
    @Autowired
    NoticeBoardRepository noticeBoardRepository;
    @Autowired
    FreeBoardRepository freeBoardRepository;


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
        // User user = (User) session.getAttribute("user_info");
        // String userId = user.getName();
        String userId = "??????";
        board.setUserId(userId);
        board.setCreDate(new Date());
        board.setViewCnt(0L);
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
        // User user = (User) session.getAttribute("user_info");
        // String userId = quiz_board.getUserId();
        // // String userId = "??????";
        quiz_board.setCreDate(new Date());
        // String userId = quiz_board.getUserId();
        // quiz_board.setUserId(userId);
        quizBoardRepository.save(quiz_board);

        return quiz_board;
    }
    @GetMapping("/noticeTableWrite")
    public String noticeTableWrite() {
        return "noticeTableWrite";
    }

    @PostMapping("/noticeTableWrite")
    @ResponseBody
    public NoticeBoard noticeTableWrite(@ModelAttribute NoticeBoard notice_board) {
        // User user = (User) session.getAttribute("user_info");
        // String userId = quiz_board.getUserId();
        // // String userId = "??????";
        
        // String userId = quiz_board.getUserId();
        // quiz_board.setUserId(userId);
        notice_board.setCreDate(new Date());
        noticeBoardRepository.save(notice_board);

        return notice_board;
    }
    @GetMapping("/freeTableWrite")
    public String freeTableWrite() {
        return "freeTableWrite";
    }

    @PostMapping("/freeTableWrite")
    @ResponseBody
    public FreeBoard freeTableWrite(@ModelAttribute FreeBoard free_board) {
        // User user = (User) session.getAttribute("user_info");
        // String userId = quiz_board.getUserId();
        // // String userId = "??????";
        
        // String userId = quiz_board.getUserId();
        // quiz_board.setUserId(userId);
        free_board.setCreDate(new Date());
        freeBoardRepository.save(free_board);

        return free_board;
    }

    //??????

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
        // String content2 = answer.getContent2();
        // answer.setContent2(content2);
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
    @GetMapping("/freeAnswer")
    @ResponseBody
    public List<FreeAnswer> freeAnswerList(@ModelAttribute FreeAnswer freeAnswer, Long freeBoard_id) {
        FreeBoard freeBoard = freeBoardRepository.findById(freeBoard_id).get();
        Sort sort = Sort.by(Order.desc("id"));
        List<FreeAnswer> list = freeAnswerRepository.findByFreeBoard( freeBoard , sort);
        return list;
    }

    @PostMapping("/freeAnswer")
    @ResponseBody
    public FreeAnswer freeAnswer(@ModelAttribute FreeAnswer freeAnswer, Long freeBoard_id) {
        // User user = (User) session.getAttribute("user_info");
        // // String userId = user.getName();
        FreeBoard freeBoard = freeBoardRepository.findById(freeBoard_id).get();
        String content = freeAnswer.getContent();
        freeAnswer.setContent(content);
        freeAnswer.setFreeBoard(freeBoard);
        freeAnswerRepository.save(freeAnswer);

        return freeAnswer;
    }

    // //list

    @GetMapping("/tables")
    @ResponseBody
    public List<Board> boardList(Long id) {
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
    @GetMapping("/noticeTables")
    @ResponseBody
    public List<NoticeBoard> noticeBoardList() {
        Sort sort = Sort.by(Order.desc("id"));
        List<NoticeBoard> list = noticeBoardRepository.findAll(sort);
        return list;

    }
    @GetMapping("/freeTables")
    @ResponseBody
    public List<FreeBoard> freeBoardList() {
        Sort sort = Sort.by(Order.desc("id"));
        List<FreeBoard> list = freeBoardRepository.findAll(sort);
        return list;

    }

    //???????????????

    @GetMapping("/table/detail")
    @ResponseBody
    public Board boardDetail(Long id) {
        //????????? ??????
        Optional<Board> opt = boardRepository.findById(id);
        Board board = opt.get();
        board.setViewCnt(board.getViewCnt() + 1);
        boardRepository.save(board);
        return opt.get();
    }


    @GetMapping("/table/quizDetail")
    @ResponseBody
    public QuizBoard quizBoardDetail(Model model, Long id) {
        Optional<QuizBoard> opt = quizBoardRepository.findById(id);

        return opt.get();
    }
    @GetMapping("/table/noticeDetail")
    @ResponseBody
    public NoticeBoard noticeBoardDetail(Model model, Long id) {
        Optional<NoticeBoard> opt = noticeBoardRepository.findById(id);

        return opt.get();
    }
    @GetMapping("/table/freeDetail")
    @ResponseBody
    public FreeBoard freeBoardDetail(Model model, Long id) {
        Optional<FreeBoard> opt = freeBoardRepository.findById(id);

        return opt.get();
    }

    //?????? 


    @PostMapping("/table/update/{id}")
    @ResponseBody
    public Board tableUpdate(
            @ModelAttribute Board board, @PathVariable("id") long id) {
        System.out.println(board);
        User user = (User) session.getAttribute("user_info");
        // String userId = user.getEmail();
        String userId = "??????";
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
        // String userId = "??????";
        // String content = board.getContent();
        // quizBoard.setUserId(userId);
        quizBoard.setId(id);
        // board.setContent(content);
        quizBoardRepository.save(quizBoard);
        return quizBoard;
    }
    @PostMapping("/freeUpdate/{id}")
    @ResponseBody
    public FreeBoard freeUpdate(
            @ModelAttribute FreeBoard freeBoard, @PathVariable("id") long id) {
       
        User user = (User) session.getAttribute("user_info");
        // String userId = user.getEmail();
        // String userId = "??????";
        // String content = board.getContent();
        // quizBoard.setUserId(userId);
        freeBoard.setId(id);
        // board.setContent(content);
        freeBoardRepository.save(freeBoard);
        return freeBoard;
    }


    //??????

    @GetMapping("/table/delete/{id}")
    @ResponseBody
    public String tableDelete(@PathVariable("id") long id) {

        // opt = boardRepository.deleteById(id);
        
        // Board board = opt.get();
        // board.dele
        // boardRepository.save(board);
        // return opt.get();


        boardRepository.deleteById(id);

        // return "redirect:/";
        return "/admin/tables";
    }








    //?????????
    @GetMapping("/best")
    @ResponseBody
    public Board bestView(@ModelAttribute Board board) {
        Board bestBoard = boardRepository.findTopByOrderByViewCntDesc();

        return bestBoard;
    }














    //?????????
    // @GetMapping("pagination")
    // public String pagination(
    //         Model model, @RequestParam(defaultValue = "") int page) {
    //     int startPage = (page - 1) / 10 * 10 + 1;
    //     int endPage = startPage + 9;
    //     model.addAttribute("startPage", startPage);
    //     model.addAttribute("endPage", endPage);
    //     model.addAttribute("page", page);
    //     return "pagination";
    // }





    // @GetMapping("/admin/index")
    // @ResponseBody
    // public String topView(@PathVariable("id") long id) {
    //     List<Board> list = boardRepository.findTop1ByOrderByIdDesc(board, sort);
    //     return list;
    // }



    // @GetMapping("/tables")
	// @ResponseBody


    // return opt.get();
    // }



    // @GetMapping("/index")
    // @ResponseBody
    // public List<Board> bestBoard(Long id) {

    //    List<Board> list = boardRepository.findTop1ByOrderBySeqDesc(id);

    //     return list;
    // }





//     @GetMapping("/noticeTables")
//     @ResponseBody
//     public List<NoticeBoard> noticeBoardList() {
//         Sort sort = Sort.by(Order.desc("id"));
//         List<NoticeBoard> list = noticeBoardRepository.findAll(sort);
//         return list;
// }




// @GetMapping("/tables")
// @ResponseBody
// public List<Board> besViewList(Long id) {
//     Sort sort = Sort.by(Order.desc("viewCnt"));
//     List<Board> list = boardRepository.findTop1ByOrderBySeqDesc(sort);

//     return list;

//     }








}
