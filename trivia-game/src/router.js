import { createRouter, createWebHistory } from "vue-router";
import Start from "./views/Start.vue";
import Question from "./views/Question.vue";

const routes = [
  {
    path: "/",
    component: Start,
  },
  {
    path: "/question",
    component: Question,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
