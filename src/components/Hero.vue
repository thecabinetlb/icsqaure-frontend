<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const backgroundY = ref(0);
const textY = ref(0);

const handleScroll = () => {
    const scrollY = window.scrollY;
    const width = window.innerWidth;
    if ( width > 768) {
        backgroundY.value = `${scrollY * 0.5}px`; // Adjust the multiplier as needed for desired effect
        textY.value = `${scrollY * 0.8}px`; // Adjust the multiplier as needed for desired effect        
    }
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section class="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
    <div class="absolute inset-0 min-h-screen bg-center bg-cover bg-sky_v3"
      :style="{ transform: 'translateY(' + backgroundY + ')' }"
    />
    <div class="relative z-[1] w-10/12 mx-auto space-y-6 text-center" :style="{ transform: 'translateY(' + textY + ')' }">
        <h1 class="text-accent1 uppercase 2xl:text-7xl sm:text-6xl text-5xl text-center font-[500]">Lorem ipsum</h1>
        <p class="font-[400] text-justify text-accent2 2xl:w-1/3 lg:w-3/4 mx-auto" style="text-align-last: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="#contact" class="block cursor-pointer p-3 w-fit mx-auto font-[400] text-center rounded-[8px] shadow-sm text-accent1 bg-primary hover:brightness-125">Contact Us</RouterLink>        
    </div>        
    <div class="absolute inset-0 z-[2] min-h-screen bg-center bg-cover bg-buildings_v3"/>
  </section>
</template>