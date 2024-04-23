<script scoped>
import { RouterLink } from 'vue-router'
</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-screen aspect-[2.46/1] bg-center bg-cover bg-hero">
        <div class="w-10/12 mx-auto space-y-6 text-center">
            <h1 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl text-center font-[500]">Lorem ipsum</h1>
            <p class="font-[400] text-justify text-accent2 2xl:w-1/3 lg:w-3/4 mx-auto" style="text-align-last: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="#contact" class="block cursor-pointer p-3 w-fit mx-auto font-[400] text-center rounded-[8px] shadow-sm text-accent1 bg-primary hover:brightness-125">Contact Us</RouterLink>        
        </div>
   </section>
</template>