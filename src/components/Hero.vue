<script scoped>
import { RouterLink } from 'vue-router'

</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-screen bg-center bg-cover bg-hero">
        <div class="w-10/12 mx-auto space-y-6 text-center">
            <h1 class="text-accent1 uppercase lg:text-5xl sm:text-4xl text-3xl text-center font-[500]">Lorem ipsum</h1>
            <p class="font-[400] text-justify text-accent2 lg:w-1/3" style="text-align-last: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="#contact" class="block cursor-pointer px-4 py-3 w-32 mx-auto font-[400] text-center rounded-[8px] shadow-sm text-accent1 bg-primary hover:brightness-125">Contact Us</RouterLink>        
        </div>
   </section>
</template>