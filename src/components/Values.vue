<script setup>
import { RouterLink } from 'vue-router'
import value1 from '/images/values/value1.svg'
import value2 from '/images/values/value2.svg'
import value3 from '/images/values/value3.svg'
import value4 from '/images/values/value4.svg'
const values = [
{ id: 1, name: 'Creative Ideas', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link:"/value1", target:"_blank", icon:value1 },
{ id: 2, name: 'Best Features', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link:"/value2", target:"_blank", icon:value2 },
{ id: 3, name: 'Experience', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link:"/value3", target:"_blank", icon:value3 },
{ id: 4, name: 'Easy Solutions', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link:"/value4", target:"_blank", icon:value4 }
];
</script>
<template>
    <section class="flex flex-col items-center justify-center w-10/12 h-full min-h-screen gap-10 py-20 mx-auto">
        <div class="flex flex-wrap justify-between w-full">
            <div class="flex flex-col w-full gap-6 md:w-1/2">
                <h1 class="px-3 py-2 w-fit font-[400] rounded-full shadow-sm bg-primary">Growing with our Clients</h1>
                <h2 class="text-accent1 uppercase lg:text-5xl sm:text-4xl text-3xl font-[500]">Our core values & principles</h2>
                <p class="font-[400] text-justify text-accent2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="/#contact" class="self-end cursor-pointer px-4 py-3 h-fit ms-auto me-0 w-32 font-[400] text-center rounded-[8px] shadow-sm text-accent1 bg-primary hover:brightness-125">Get in Touch</RouterLink>
        </div>
        <div class="flex flex-wrap items-center justify-between w-full gap-y-10">
            <div v-for="(item, key) in values" :key="key" class="2xl:w-[23%] md:w-[32%] sm:w-[48%] w-full 2xl:min-h-[400px] min-h-[330px] bg-accent1 text-bg rounded-[20px] hover:scale-y-110 hover:bg-card-gradient hover:bg-cover hover:bg-center flex flex-col justify-center gap-6 p-6 shadow-sm group">
                <img :src="item.icon" alt="IC2" width="54" height="53" center cover responsive loading="lazy"/>
                <h3 class="lg:text-2xl sm:text-xl text-lg font-[900] group-hover:text-accent1">{{ item.name }}</h3>
                <p class="font-[400] text-justify group-hover:text-accent2 2xl:w-1/2 lg:w-2/3">{{ item.description }}</p>
                <RouterLink :id="'go-to' + item.name + '-page'" :aria-label="'go to' + item.name + 'page'" :to="item.link" :target="item.target" class="cursor-pointer px-4 py-3 font-[400] hover:brightness-125 group-hover:text-primary">Read More  &rarr;</RouterLink>
            </div>
        </div>
    </section>
</template>