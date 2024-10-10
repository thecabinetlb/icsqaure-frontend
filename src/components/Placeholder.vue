<script setup>
import logo from '/ic2logo_grey.svg'
import linkedin from '/images/socials/linkedin.svg'
import Socials from './Socials.vue'

const sociallinks = [
  { id: 1, name:'Linkedin', to: 'https://www.linkedin.com/company/ic2-by-aits/', target:"_blank", icon:linkedin },
];
</script>
<template>
<section class="flex flex-col items-center justify-center h-screen mx-auto bg-center bg-cover bg-sky_v3">
    <img :src="logo" alt="IC2" width="45" height="54" class="mt-20 scale-125" loading="eager" />

  <div class="flex flex-col items-center justify-center w-11/12 h-full gap-10 mx-auto 2xl:w-8/12 lg:w-10/12">
    <h1 class="2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-[500] text-center uppercase text-accent1">
      We're busy building something amazing. Stay tuned for the future of innovation.
    </h1>

    <div class="flex items-center justify-center w-full gap-3 px-2">
      <span class="text-base font-[200] text-accent1">0%</span>
      <div class="relative w-full border border-accent1 rounded-full h-2.5">
        <div class="bg-accent1 h-2.5 rounded-full" style="width: 85%;"></div>
      </div>
      <span class="text-sm font-[200] text-accent1">100%</span>
    </div>
    <div class="flex items-center gap-6">
      <p class="tracking-wide font-[200] lg:text-[24px] md:text-[20px] sm:text-[18px] text-center text-accent2">
        Follow us for the latest updates:
      </p>
      <Socials :data="sociallinks"/>
    </div>
  </div>
</section>
</template>