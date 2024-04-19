<script scoped>
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
    <section class="flex flex-col items-center justify-center w-10/12 min-h-screen mx-auto">
        <div class="flex flex-wrap justify-between w-full gap-2">
            <div class="flex flex-col w-full gap-6 md:w-1/2">
                <h1 class="px-3 py-2 w-fit font-[400] rounded-[8px] shadow-lg text-accent1 bg-primary">Growing with our Clients</h1>
                <h2 class="text-accent1 uppercase lg:text-5xl sm:text-4xl text-3xl font-[500]">Our core values & principles</h2>
                <p class="font-[400] text-justify text-accent2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="/#contact" class="self-end cursor-pointer px-4 py-3 h-fit ms-auto me-0 w-1/6 font-[400] text-center rounded-[8px] shadow-lg text-accent1 bg-primary hover:brightness-125">Get in Touch</RouterLink>
        </div>
        <div class="flex flex-wrap items-center justify-center w-full gap-6">
            <div v-for="(item, key) in values" :key="key" class="w-40 h-40 bg-accent1 text-bg rounded-[16px] hover:scale-110 hover:bg-gradient hover:bg-cover hover:bg-center hover:text-primary flex flex-col gap-3 p-6">
                <h3 class="uppercase lg:text-3xl sm:text-2xl text-xl font-[500]">{{ item.name }}</h3>
                <p class="font-[400] text-justify 2xl:w-1/2 w-2/3">{{ item.description }}</p>
                <RouterLink :id="'go-to' + item.name + '-page'" :aria-label="'go to' + item.name + 'page'" to="/" class="cursor-pointer px-4 py-3 w-1/4 font-[400] hover:brightness-125">Read More &larr;</RouterLink>
            </div>
        </div>
    </section>
</template>