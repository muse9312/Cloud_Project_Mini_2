package com.groom.backend.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.groom.backend.model.User;
import com.groom.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    HttpSession session;

    // ========================== Register ==============================

    @GetMapping("/res")
    public String signup() {
        return "res";
    }

    @PostMapping("/res")
    @ResponseBody
    public User signupPost(@ModelAttribute User user) {
        userRepository.save(user);
        return user;
    }

    // ========================== Login ==============================

    @GetMapping("/signin")
    public String signin() {
    return "signin";
    }

    @PostMapping("/signin")
    @ResponseBody
    public Map<String, Object> signinPost(@ModelAttribute User user) {
    User dbUser = userRepository.findByEmailAndPwd(user.getEmail(),
    user.getPwd());
    Map<String, Object> map = new HashMap<>();
    if (dbUser != null) {
    map.put("code", 200);
    map.put("message", "success");
    } else {
    map.put("code", 201);
    map.put("message", "fail");

    }

    return map;
    }

}
