<script setup>
import StartForm from "../components/StartForm.vue";

const handleAuthSuccess = () => {
  console.log("user is available");
};
</script>

<template>
  <main class="container mx-auto px-4">
    <h1 class="mb-3 text-2xl">Enter username to get started</h1>
    <StartForm @onAuthSuccess="handleAuthSuccess" />
  </main>
</template>
