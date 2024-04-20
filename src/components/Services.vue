<script setup>
import { RouterLink } from 'vue-router'
import service1 from '/images/services/service1.webp'
import service2 from '/images/services/service2.webp'
const services = [
{ id: 1, name: 'Keys to writing copy that actually converts and sells users', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...", link:"/service1", target:"_blank", image:service1 },
{ id: 2, name: 'Keys to writing copy that actually converts and sells users', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...", link:"/service2", target:"_blank", image:service2 },
];
</script>
<template>
    <section class="flex flex-col justify-center w-full h-full py-20 bg-center bg-cover bg-gradient">
        <div class="w-10/12 mx-auto space-y-10">
            <h1 class="text-accent1 uppercase lg:text-5xl sm:text-4xl text-3xl font-[500]">Featured services</h1>
            <div class="flex flex-wrap items-center justify-between gap-3 md:gap-0">
                <div v-for="(item, key) in services" :key="key" class="md:w-[48%] w-full min-h-[200px] flex flex-col justify-center gap-6 pb-6 border-b border-accent2">
                    <img :src="item.image" alt="IC2" width="100%" height="100%" center cover responsive loading="lazy"/>
                    <h3 class="lg:text-2xl sm:text-xl text-lg font-[900] text-accent1">{{ item.name }}</h3>
                    <p class="font-[400] text-justify text-accent2">{{ item.description }}</p>
                    <RouterLink :id="'go-to' + item.name + '-page'" :aria-label="'go to' + item.name + 'page'" :to="item.link" :target="item.target" class="text-center w-1/3 bg-primary rounded-[8px] shadow-sm cursor-pointer px-4 py-3 font-[400] hover:brightness-125">Read More</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>