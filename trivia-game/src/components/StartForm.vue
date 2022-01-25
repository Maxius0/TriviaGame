<script setup>
import { ref } from "vue";
import { apiUserRegister } from "../api/users";

const store = useStore();
const emit = defineEmits(["onAuthSuccess"]);

const username = ref("");

const onSubmit = async () => {
  const [error, user] = await apiUserRegister(username.value);

  if (error != null) {
    displayError.value = error;
  } else {
    store.commit();
    emit("onAuthSuccess");
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit">
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
