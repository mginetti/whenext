import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewHome from "../views/NewHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/old",
    name: "old-home",
    component: Home
  },
  {
    path: "/",
    name: "home",
    component: NewHome
  },
  /* {
    path: "/auth",
    name: "auth",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/auth/AuthLogin.vue")
  } */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
