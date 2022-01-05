package com.groom.backend.service;

import com.groom.backend.model.User;

public class MypageService {

    // // 회원정보 수정
	// @Override
	// public User update_mypage(User user) throws Exception {
	// 	user.update_mypage(member);
	// 	return manager.login(member.getId());
	// }
	
	// // 비밀번호 변경
	// @Override
	// public User update_pw(User user, String old_pw, HttpServletResponse response) throws Exception {
	// 	response.setContentType("text/html;charset=utf-8");
	// 	PrintWriter out = response.getWriter();
	// 	if(!old_pw.equals(manager.login(member.getId()).getPw())) {
	// 		out.println("<script>");
	// 		out.println("alert('기존 비밀번호가 다릅니다.');");
	// 		out.println("history.go(-1);");
	// 		out.println("</script>");
	// 		out.close();
	// 		return null;
	// 	}else {
	// 		manager.update_pw(member);
	// 		return manager.login(member.getId());
	// 	}
	// }
}
