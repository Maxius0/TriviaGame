<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { apiUserRegister } from "../api/users";

const store = useStore();
const emit = defineEmits(["onAuthSuccess"]);

const username = ref("");
const displayError = ref("");

const onStartClick = async (action) => {
  const error = await store.dispatch("start", { action, username });

  if (error != null) {
    displayError.value = error;
  } else {
    emit("onAuthSuccess");
  }
};
</script>

<template>
  <form @submit.prevent="onStartClick('start')">
    <fieldset class="mb-3">
      <label for="username" aria-label="Username" class="block">Username</label>
      <input
        type="text"
        id="username"
        placeholder="JohnDoe"
        class="border border-slate-300"
        v-model="username"
      />
    </fieldset>
    <button
      type="submit"
      class="bg-indigo-500 text-white p-2 rounded pr-5 pl-5"
    >
      Start
    </button>
  </form>
</template>
