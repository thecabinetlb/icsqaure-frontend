<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-full py-20 bg-center bg-cover bg-gradient">
        <div class="flex flex-wrap justify-between w-10/12 gap-10 mx-auto lg:gap-0">
            <div class="flex flex-col justify-center w-full gap-6 lg:w-1/2">
                <h1 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl font-[500]">Our Mission</h1>
                <p class="font-[400] text-justify text-accent2 lg:w-3/4">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.Lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div class="w-full lg:w-1/2"        
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
                <img src="/images/mission/mission.webp" alt="IC2" width="505" height="492" center cover responsive loading="lazy" class="mx-auto md:ms-auto md:me-0"/>
            </div>
        </div>
    </section>
</template>