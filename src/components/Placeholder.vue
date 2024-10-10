<script setup>
import logo from '/ic2logo_grey.svg'
import linkedin from '/images/socials/linkedin.svg'
import Socials from './Socials.vue'
import Stopwatch from './Stopwatch.vue'

const sociallinks = [
  { id: 1, name:'Linkedin', to: 'https://www.linkedin.com/company/ic2-by-aits', target:"_blank", icon:linkedin },
];
</script>
<template>
<section class="flex flex-col items-center justify-center h-screen mx-auto bg-center bg-cover bg-sky_v3">
    <img :src="logo" alt="IC2" width="45" height="54" class="mt-20 scale-150" loading="eager" />

  <div class="flex flex-col items-center justify-center w-11/12 h-full gap-10 mx-auto 2xl:gap-16 2xl:w-8/12 lg:w-10/12">
    <h1 class="2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-[100] text-center text-accent1">
      We're busy building something amazing.
    </h1>
    <h1 class="2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-[100] text-center text-accent1">
      <span class="font-[900]">Stay tuned</span> for the future of innovation.
    </h1>
    <Stopwatch/>
    <div class="flex flex-wrap items-center justify-center gap-6 text-center">
      <p class="tracking-wide font-[400] lg:text-[24px] md:text-[20px] sm:text-[18px] text-accent2">
        Follow us for the latest updates:
      </p>
      <Socials :data="sociallinks"/>
    </div>
  </div>
</section>
</template>