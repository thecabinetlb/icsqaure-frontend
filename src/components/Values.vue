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
    <section class="flex flex-col items-center justify-center w-10/12 h-full gap-10 py-20 mx-auto">
        <div class="flex flex-col w-full gap-6">
            <h1 class="px-3 py-2 w-fit font-[500] rounded-[8px] text-accent1 shadow-sm border border-primary">Growing with our Clients</h1>
            <h2 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl font-[500]">Our core values & principles</h2>
            <p class="font-[400] text-justify text-accent2 lg:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="/#contact" class="cursor-pointer p-3 ms-auto me-0 w-fit font-[400] text-center rounded-[8px] shadow-sm text-accent1 bg-primary hover:brightness-125">Get in Touch</RouterLink>
        <div class="flex flex-wrap items-center justify-between w-full gap-y-10">
          <div v-for="(item, key) in values" :key="key"
            class="2xl:w-[23%] md:w-[48%] sm:w-[47%] w-full min-h-[330px] bg-accent1 text-bg rounded-[20px] hover:scale-y-110 hover:bg-card-gradient hover:bg-cover hover:bg-center flex flex-col justify-center gap-6 p-6 shadow-sm group transfrom duration-600"
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
              <img :src="item.icon" alt="IC2" width="54" height="53" center cover responsive loading="lazy"/>
              <h3 class="md:text-2xl sm:text-xl text-lg font-[900] group-hover:text-accent1">{{ item.name }}</h3>
              <p class="font-[400] text-justify group-hover:text-accent2 lg:w-3/4">{{ item.description }}</p>
              <RouterLink :id="'go-to' + item.name + '-page'" :aria-label="'go to' + item.name + 'page'" :to="item.link" :target="item.target" class="cursor-pointer font-[400] hover:brightness-125 group-hover:text-primary">Read More  &rarr;</RouterLink>
          </div>
        </div>
    </section>
</template>