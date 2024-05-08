<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
defineProps({
    data: Array
})
const openDetails = ref(null)

</script>
<template>
    <section class="flex flex-col items-center justify-center w-10/12 h-full gap-10 py-20 mx-auto">
        <div class="flex flex-col w-full gap-6">
            <h2 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl font-[500]">Key Differentiators</h2>
            <p class="font-[400] text-justify text-accent2 lg:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="/contact" class="cursor-pointer p-3 ms-auto me-0 w-fit font-[400] text-center rounded-[8px] shadow-sm text-accent1 bg-primary hover:brightness-125">Get in Touch</RouterLink>
        <div class="flex flex-wrap justify-between w-full gap-6 gap-y-10">
          <div v-for="(item, key) in data" :key="key" 
          class="2xl:w-[23%] md:w-[48%] sm:w-[47%] w-full bg-accent1 text-bg rounded-[20px] flex flex-col gap-6 p-6 shadow-sm ease duration-300"
          @click="openDetails = key"
          :class="{'flex-grow items-start bg-gradient bg-cover bg-center lg:w-[181px]' : openDetails === key, 'max-h-[151px] items-center' : openDetails !== key}">
              <div :class="{'flex gap-3 items-center' : openDetails === key}">
                <img :src="openDetails === key ? item.iconopened : item.icon" alt="IC2" width="54" height="53" center cover responsive loading="lazy" :class="{'mx-auto mb-6' : openDetails !== key}"/>
                <h3 class="md:text-2xl sm:text-xl text-lg font-[900]" :class="{'text-center' : openDetails !== key, 'text-accent1' : openDetails === key}">{{ item.name }}</h3>                
              </div>
              <p v-show="openDetails === key" class="font-[400] text-justify text-accent2">{{ item.description }}</p>
         </div>
        </div>
    </section>
</template>
<!-- 2xl:w-[23%] md:w-[48%] sm:w-[47%] w-full -->