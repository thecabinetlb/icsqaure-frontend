<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const email = ref('')
</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-full bg-center bg-cover bg-gradient">
        <div class="flex flex-wrap justify-between w-full gap-6 mx-auto lg:gap-0">
            <div class="flex flex-col w-full gap-6 lg:w-1/3 ms-[8.333333%]">
                <h1 class="px-3 py-2 w-fit font-[400] rounded-full shadow-sm bg-primary">Contact</h1>
                <h2 class="text-accent1 uppercase lg:text-5xl sm:text-4xl text-3xl font-[500]">Ready To Talk?</h2>
                <p class="font-[400] text-justify text-accent2 2xl:w-1/2 lg:w-2/3">Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
                <div class="flex gap-4">
                    <input type="text" id="email" placeholder="example@gmail.com" v-model="email" required class="w-2/3 px-4 py-3 border bg-accent1 boredr-accent2 rounded-[8px]">
                    <RouterLink id="go-to-mission-page" aria-label="go to mission page" to="/mission" class="cursor-pointer px-4 py-3 w-fit font-[400] text-accent1 text-center rounded-[8px] shadow-sm bg-primary hover:brightness-125">Read More</RouterLink>
                </div>
            </div>
            <div class="lg:min-h-[200px] ms-auto me-0">
                <img src="/images/subscription/subscription.webp" alt="IC2" width="100%" height="100%" center cover responsive loading="lazy"/>
            </div>
        </div>
    </section>
</template>