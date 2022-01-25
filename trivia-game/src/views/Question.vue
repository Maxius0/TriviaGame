<script setup>
import { onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => store.state.user);

onMounted(async () => {
  await store.dispatch("fetchAllQuestions");
});
</script>

<template>
  <h1>Questions</h1>
  <p>{{ user.username }}</p>
</template>
