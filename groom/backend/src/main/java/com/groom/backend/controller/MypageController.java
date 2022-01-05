package com.groom.backend.controller;

import javax.servlet.http.HttpSession;

import com.groom.backend.repository.MyPageRepository;
import com.groom.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

public class MypageController {
    @Autowired
    MyPageRepository myPageRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    HttpSession httpSession;

    @RequestMapping(value = "/mypage")
	public String mypage() throws Exception{
		return "/member/mypage";
	}

}
