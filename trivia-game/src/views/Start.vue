<script setup>
import { ref } from 'vue';
import { apiUserRegister } from '../api/users';

const username = ref("")

const onSubmit = async () => {
    const [error, user] = await apiUserRegister(username.value);
    console.log("ERR", error);
    console.log("USER", user);
}

</script>

<template>
<main class="container mx-auto px-4">
    <h1 class="mb-3 text-2xl">Enter username to get started</h1>
    <form @submit.prevent="onSubmit">
        <fieldset class="mb-3">
            <label for="username" aria-label="Username" class="block">Username</label>
            <input type="text" id="username" placeholder="JohnDoe" class="border border-slate-300" v-model="username">
        </fieldset>
         <div class="grid gap-2 grid-cols-2">
            <button type="submit" class="bg-indigo-500 text-white p-3 rounded">Register</button>
            <button type="submit" class="bg-yellow-500 text-white p-3 rounded">Login</button>
         </div>
    </form>
</main>
</template>