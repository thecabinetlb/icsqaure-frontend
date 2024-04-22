<script setup>
import { ref } from 'vue'
import call from '/images/contact/call.svg'
import time from '/images/contact/time.svg'
import location from '/images/contact/location.svg'
const contactinfo = [
{ id: 1, name: 'Call Today', content:"+1 800 100 900", link:"/", target:"_blank", icon:call },
{ id: 2, name: 'Monday To Friday', content:"9AM - 5PM", link:"/", target:"_blank", icon:time },
{ id: 3, name: 'Office', content:"195 Devonshire St Boston, MA 02110", link:"/", target:"_blank", icon:location },
];
const formData = ref({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

</script>

<template>
    <section class="flex flex-wrap items-center justify-between w-10/12 h-full min-h-screen py-20 mx-auto">
        <div class="flex flex-col w-full h-full gap-10 md:w-1/3">
            <div class="flex flex-col gap-6">
                <h1 class="text-accent1 uppercase lg:text-5xl sm:text-4xl text-3xl font-[500]">Contact Us.It’s Easy.</h1>
                <p class="font-[400] text-justify text-accent2">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
            </div>
            <div v-for="(item, key) in contactinfo" :key="key" class="flex items-center w-full gap-3 mb-3 group">
                <img :src="item.icon" :alt="item.name" width="53" height="53" center cover responsive loading="lazy"/>
                <div class="w-full">
                    <h3 class="font-[400] text-accent2">{{ item.name }}</h3>
                    <p class="font-[500] text-justify w-2/3 text-accent1 group-hover:brightness-125">{{ item.content }}</p>
                </div>
            </div>
        </div>
        <form class="grid w-full grid-cols-2 gap-6 md:w-2/3">
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="name" placeholder="Your Name" v-model="formData.name" required class="w-full px-4 py-3 border bg-accent1 boredr-accent2 rounded-[20px]">
            </div>    
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="email" placeholder="example@gmail.com" v-model="formData.email" required class="w-full px-4 py-3 border bg-accent1 boredr-accent2 rounded-[20px]">
            </div>      
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="phone" id="phone" placeholder="+008 654 231" v-model="formData.phone" required class="w-full px-4 py-3 border bg-accent1 boredr-accent2 rounded-[20px]">
            </div> 
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="company" placeholder="Your Company's Name" v-model="formData.company" required  class="w-full px-4 py-3 border bg-accent1 boredr-accent2 rounded-[20px]">
            </div>    
            <div class="w-full col-span-2">
                <textarea id="message" rows="5" placeholder="Briefly tell us about your project and your current goals. How can we help you?" v-model="formData.message" required class="w-full px-4 py-3 border bg-accent1 boredr-accent2 rounded-[20px]"></textarea>
            </div>    
            <button aria-label="go to contact section" class="self-end cursor-pointer w-fit px-4 py-3 font-[400] text-center rounded-[8px] shadow-sm text-accent1 bg-primary hover:brightness-125">Send Message</button>    
        </form>
    </section>
</template>