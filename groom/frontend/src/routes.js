/*eslint-disable*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },


  // ========================================  Logout ========================================
  <br />, <br />, <br />, <br />, <br />, <br />,
  <br />, <br />, <br />, <br />, <br />, <br />,
  <br />, <br />, <br />, <br />, <br />, <br />,
  <br />, <br />,
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-user-run text-pink",
    component: Login,
    layout: "/auth",
  },








  {
    path: "/register",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
