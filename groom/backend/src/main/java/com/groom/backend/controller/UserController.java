package com.groom.backend.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.groom.backend.Service.KakaoAPI;
import com.groom.backend.model.User;
import com.groom.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

// @CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin
@Controller
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    HttpSession session;

    // ========================== Kakao Login ==============================

    KakaoAPI kakaoApi = new KakaoAPI();

    @RequestMapping(value = "/login")
    public ModelAndView login(@RequestParam("code") String code, HttpSession session) {
        ModelAndView mav = new ModelAndView();
        // 1번 인증코드 요청 전달
        String accessToken = kakaoApi.getAccessToken(code);
        // 2번 인증코드로 토큰 전달
        HashMap<String, Object> userInfo = kakaoApi.getUserInfo(accessToken);

        System.out.println("login info : " + userInfo.toString());

        if (userInfo.get("email") != null) {
            session.setAttribute("userId", userInfo.get("email"));
            session.setAttribute("accessToken", accessToken);
        }
        mav.addObject("userId", userInfo.get("email"));
        mav.setViewName("index");
        return mav;
    }

    @RequestMapping(value = "/logout")
    public ModelAndView logout(HttpSession session) {
        ModelAndView mav = new ModelAndView();

        kakaoApi.kakaoLogout((String) session.getAttribute("accessToken"));
        session.removeAttribute("accessToken");
        session.removeAttribute("userId");
        mav.setViewName("index");
        return mav;
    }

    // ========================== Register ==============================

    @GetMapping("/res")
    public String register() {
        return "res";
    }

    @PostMapping("/res")
    @ResponseBody
    public User registerPost(@ModelAttribute User user) {
        userRepository.save(user);
        return user;
    }

    // ========================== Login ==============================

    @GetMapping("/log")
    public String login() {
        return "log";
    }

    @PostMapping("/log")
    @ResponseBody
    public Map<String, Object> loginPost(@ModelAttribute User user) {
        User dbUser = userRepository.findByEmailAndPwd(user.getEmail(),
                user.getPwd());
        Map<String, Object> map = new HashMap<>();
        if (dbUser != null) {
            map.put("name", dbUser.getName());
            map.put("Code", dbUser);
            map.put("code", 200);
            map.put("message", "success");
        } else {
            map.put("code", 201);
            map.put("message", "fail");
        }

        return map;
    }

}
