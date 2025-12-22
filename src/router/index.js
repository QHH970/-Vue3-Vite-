import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Dynamics from "../pages/Dynamics.vue";
import About from "../pages/About.vue";
import Member from "../pages/Member.vue";

//配置路由规则
const routes = [
  { path: "/", name: "home", component: Home },//默认路由，访问到根路径时，显示Home页面
  { path: "/dynamics", name: "dynamics", component: Dynamics },
  { path: "/news", name: "news", component: News },
  { path: "/member", name: "member", component: Member },
  { path: "/about", name: "about", component: About }
];
// 2.创建路由器
const router = createRouter({
  history: createWebHashHistory(),//路由工作模式，hash模式，路由路径中会有#号
routes,//routes：routes的简写形式，表示路由规则
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;


