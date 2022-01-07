/*eslint-disable*/
import Index from "views/Index.js";
import CloudNews from "views/board/CloudNews.js";
import Quiz from "views/board/Quiz.js";
import Login from "views/examples/Login.js";
import Tables from "views/board/Tables.js";
import Notice from "views/board/Notice.js";
import Register from "views/examples/Register.js";
import TableWrite from "views/write/TableWrite.js";
import AboutUs from "views/examples/AboutUs.js";
import CodingStudy from "views/board/CodingStudy.js";
import BoardDetail from "views/board/BoardDetail";
import QuizBoardDetail from "views/board/QuizBoardDetail";

import Profile from "views/examples/Profile.js";
import TableUpdate from "views/board/TableUpdate";
import QuizTableWrite from "views/write/QuizTableWrite";
import QuizUpdate from "views/board/QuizUpdate";
import NoticeTableWrite from "views/write/NoticeTableWrite";
import NoticeBoardDetail from "./views/board/NoticeBoardDetail .js"
import FreeTables from "views/board/FreeTables.js";
import FreeBoardDetail from "views/board/FreeBoardDetail.js";
import FreeTableWrite from "views/write/FreeTableWrite.js";
import FreeUpdate from "views/board/FreeUpdate.js";



var routes = [
  {
    path: "/index",
    name: "뭉게구름",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/noticeTable",
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
    path: "/freeTables",
    name: "자유게시판",
    icon: "ni ni-bullet-list-67 text-blue",
    component: FreeTables,
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
  {
    path: "/CodingStudy",
    name: "코딩 공부 자료",
    icon: "ni ni-ruler-pencil text-blue",
    component: CodingStudy,
    layout: "/admin",
  },
  







  // ========================================  Logout ========================================
  <br />, <br />, <br />, <br />, <br />, <br />,
  <br />, <br />, <br />, <br />, <br />, <br />,

  {
    path: "/aboutUs",
    component: AboutUs,
    layout: "/admin",
  },


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
    path: "/noticeDetail",
    component: NoticeBoardDetail,
    layout: "/admin",
  },
  {
    path: "/freeDetail",
    component: FreeBoardDetail,
    layout: "/admin",
  },
  // {
  //   path: "/noticeDetail",
  //   component: NoticeBoardDetail,
  //   layout: "/admin",
  // },
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
    path: "/noticeTableWrite",
    component: NoticeTableWrite,
    layout: "/admin",
  },
  {
    path: "/freeTableWrite",
    component: FreeTableWrite,
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
  {
    path: "/freeUpdate",
    component: FreeUpdate,
    layout: "/admin",
  },


];

export default routes;
