import { createRouter, createWebHistory } from "vue-router";
import Start from "./views/Start.vue";
import Question from "./views/Question.vue";
import store from "./store";

const authGuard = (to, from, next) => {
  if (!store.state.user) {
    next("/");
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    component: Start,
  },
  {
    path: "/question",
    component: Question,
    beforeEnter: authGuard,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
