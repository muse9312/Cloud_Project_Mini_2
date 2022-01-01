/*eslint-disable*/
import Index from "views/Index.js";
import CloudNews from "views/examples/CloudNews.js";
import Quiz from "views/examples/Quiz.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Notice from "views/examples/Notice.js";

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
    name: "게시판",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/cloudNews",
    name: "클라우드 뉴스",
    icon: "ni ni-cloud-upload-96 text-blue",
    component: CloudNews,
    layout: "/admin",
  },
  {
    path: "/Quiz",
    name: "코드 정보",
    icon: "ni ni-ruler-pencil text-blue",
    component: Quiz,
    layout: "/admin",
  },
 


  // ========================================  Logout ========================================
  <br />, <br />, <br />, <br />, <br />, <br />,
  <br />, <br />, <br />, <br />, <br />, <br />,
  <br />, <br />, <br />, <br />, <br />,
  
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-user-run text-pink",
    component: Login,
    layout: "/auth",
  },

];
export default routes;
