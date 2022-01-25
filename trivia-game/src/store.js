import { createStore } from "vuex";
import { apiFetchAllQuestions } from "./api/questions";
import { apiUserRegister } from "./api/users";

const initUser = () => {
  const storedUser = localStorage.getItem("trivia-user");

  if (!storedUser) {
    return null;
  }
  return JSON.parse(storedUser);
};

export default createStore({
  state: {
    user: initUser(),
    questions: [],
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setQuestions: (state, questions) => {
      state.questions = questions;
    },
  },
  actions: {
    async start({ commit }, { username, action }) {
      try {
        if (action !== "start") {
          throw new Error("start: Unknown action provided " + action);
        }

        const [error, user] = await apiUserRegister(username.value);

        if (error !== null) {
          throw new Error(error);
        }

        commit("setUser", user);
        localStorage.setItem("trivia-user", JSON.stringify(user));

        return null;
      } catch (e) {
        return e.message;
      }
    },
    async fetchAllQuestions({ commit }) {
      const [error, questions] = await apiFetchAllQuestions();
      if (error !== null) {
        return error;
      }

      commit("setQuestions", questions);
      return null;
    },
  },
});
