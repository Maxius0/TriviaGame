<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => store.state.user);
</script>

<template>
  <h1>Questions</h1>
  <p>{{ user.username }}</p>
</template>
