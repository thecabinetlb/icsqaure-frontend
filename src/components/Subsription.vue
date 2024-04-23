<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
const email = ref('')
</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-full bg-center bg-cover bg-gradient">
        <div class="flex flex-wrap justify-between w-full gap-10 pt-40 mx-auto lg:gap-0">
            <div class="flex flex-col 2xl:w-[46%] lg:w-[44%] w-10/12 mx-auto gap-y-6 lg:ms-[8.333333%]">
                <h1 class="px-3 py-2 w-fit font-[500] rounded-[8px] text-accent1 shadow-sm border border-primary">Contact</h1>
                <h2 class="text-accent1 uppercase xl:text-6xl lg:text-5xl sm:text-6xl text-4xl font-[500]">Ready To Talk?</h2>
                <p class="font-[400] text-justify text-accent2 lg:w-3/4">Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
                <div class="flex flex-wrap items-center w-full gap-3">
                    <input type="text" id="email" placeholder="example@gmail.com" v-model="email" required class="sm:w-3/4 w-full px-4 py-3 border bg-accent1 boredr-accent2 rounded-[8px]">
                    <RouterLink id="go-to-mission-page" aria-label="go to mission page" to="/mission" class="cursor-pointer px-4 py-3 sm:w-fit font-[400] text-accent1 text-center rounded-[8px] shadow-sm bg-primary hover:brightness-125">Read More</RouterLink>
                </div>
            </div>
            <div class="relative 2xl:w-[44%] lg:w-[46%] ms-auto me-0"
             v-motion
                :initial="{
                    x: 100,
                }"
                :visibleOnce="{
                    x: 0,
                    transition: {
                    type: 'spring',
                    stiffness: '100',
                    delay: 200,
                    duration: 6000,
                    },
                }">
                <img src="/images/subscription/subscription.webp" alt="IC2" width="100%" height="100%" class="aspect-[1.48/1]" center cover responsive loading="lazy"/>
            </div>
        </div>
    </section>
</template>