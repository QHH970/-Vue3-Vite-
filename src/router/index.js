import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Dynamics from "../pages/Dynamics.vue";
import About from "../pages/About.vue";
import Member from "../pages/Member.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/dynamics", name: "dynamics", component: Dynamics },
  { path: "/news", name: "news", component: News },
  { path: "/member", name: "member", component: Member },
  { path: "/about", name: "about", component: About }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;


