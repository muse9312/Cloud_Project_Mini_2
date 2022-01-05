/*eslint-disable*/
import Index from "views/Index.js";
import CloudNews from "views/board/CloudNews.js";
import Quiz from "views/board/Quiz.js";
import Login from "views/examples/Login.js";
import Tables from "views/board/Tables.js";
import Notice from "views/board/Notice.js";
import Register from "views/examples/Register.js";
import TableWrite from "views/write/TableWrite.js";

import BoardDetail from "views/board/BoardDetail";
import QuizBoardDetail from "views/board/QuizBoardDetail";

import Profile from "views/examples/Profile.js";
import TableUpdate from "views/board/TableUpdate";
import QuizTableWrite from "views/write/QuizTableWrite";
import QuizUpdate from "views/board/QuizUpdate";

var routes = [
  {
    path: "/index",
    name: "뭉게구름",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/notice",
    name: "공지사항",
    icon: "ni ni-bulb-61 text-blue",
    component: Notice,
    layout: "/admin",
  },

  {
    path: "/tables",
    name: "익명게시판",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "자유게시판",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Tables,
    layout: "/admin",
  },



  // {
  //   path: "/ananymous",
  //   name: "익명게시판",
  //   icon: "ni ni-bullet-list-68 text-blue",
  //   component: Ananymous,
  //   layout: "/admin",
  // },

  {
    path: "/cloudNews",
    name: "최신 기술 뉴스",
    icon: "ni ni-cloud-upload-96 text-blue",
    component: CloudNews,
    layout: "/admin",
  },

  {
    path: "/quizTable",
    name: "코드 정보",
    icon: "ni ni-ruler-pencil text-blue",
    component: Quiz,
    layout: "/admin",
  },








  // ========================================  Logout ========================================
  <br />, <br />, <br />, <br />, <br />, <br />,
  <br />, <br />, <br />, <br />, <br />, <br />,




  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },

  {
    path: "/tableDetail",
    component: BoardDetail,
    layout: "/admin",
  },
  {
    path: "/quizDetail",
    component: QuizBoardDetail,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    component: Profile,
    layout: "/admin",
  },

  {
    path: "/register",
    component: Register,
    layout: "/auth",
  },

  {
    path: "/tableWrite",
    component: TableWrite,
    layout: "/admin",
  },
  {
    path: "/quizTableWrite",
    component: QuizTableWrite,
    layout: "/admin",
  },
  {
    path: "/tableUpdate",
    component: TableUpdate,
    layout: "/admin",
  },
  {
    path: "/quizUpdate",
    component: QuizUpdate,
    layout: "/admin",
  },

];

export default routes;
