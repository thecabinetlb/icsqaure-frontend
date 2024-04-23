<script setup>
import { RouterLink } from 'vue-router'
import service1 from '/images/services/service1smaller.webp'
import service2 from '/images/services/service2smaller.webp'
const services = [
{ id: 1, name: 'Keys to writing copy that actually converts and sells users', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...", link:"/service1", target:"_blank", image:service1 },
{ id: 2, name: 'Keys to writing copy that actually converts and sells users', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...", link:"/service2", target:"_blank", image:service2 },
];
</script>
<template>
    <section class="flex flex-col justify-center w-full h-full pt-20 bg-gradient-to-r from-[#011717] via-[#007575] to-[#00CCCC]">
        <div class="w-10/12 mx-auto space-y-10">
            <h1 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl font-[500]">Featured services</h1>
            <div class="flex flex-wrap items-center justify-between gap-6 lg:gap-0">
                <div v-for="(item, key) in services" :key="key" 
                class="relative md:w-[48%] w-full min-h-[200px] flex flex-col justify-center gap-6 pb-6 border-b border-accent2"
                v-motion
                    :initial="{
                    opacity: 0,
                    }"
                    :visibleOnce="{
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        stiffness: '100',
                        delay: key * 600,
                        duration: 6000
                    },
                    }">
                    <img :src="item.image" alt="IC2" width="100%" height="100%" class="aspect-[1.82/1]" cover responsive loading="lazy"/>
                    <h3 class="md:text-2xl sm:text-xl text-lg font-[900] text-accent1">{{ item.name }}</h3>
                    <p class="font-[400] text-justify text-accent2">{{ item.description }}</p>
                    <RouterLink :id="'go-to' + item.name + '-page'" :aria-label="'go to' + item.name + 'page'" :to="item.link" :target="item.target" class="text-accent1 text-center w-fit bg-primary rounded-[8px] shadow-sm cursor-pointer p-3 font-[400] hover:brightness-125">Read More</RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>