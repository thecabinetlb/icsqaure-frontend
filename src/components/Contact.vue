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
    <section id="contact" class="flex flex-col items-center justify-center w-10/12 h-full py-20 mx-auto ">
        <div class="flex flex-wrap items-center justify-between gap-10 lg:gap-0">
            <div class="flex flex-col w-full h-full gap-6 lg:w-1/2">
                <h1 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl font-[500]">Contact Us. <br/>It’s Easy.</h1>
                <p class="font-[400] text-justify text-accent2 lg:w-3/4">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
                <div class="flex flex-wrap items-center justify-between w-full gap-3 lg:flex-col">
                    <div v-for="(item, key) in contactinfo" :key="key" class="flex items-center gap-2 md:flex-1 lg:w-full group">
                        <img :src="item.icon" :alt="item.name" width="53" height="53" center cover responsive loading="lazy"/>
                        <div class="w-full max-h-[53px]">
                            <h3 class="font-[400] text-accent2">{{ item.name }}</h3>
                            <p class="font-[500] max-sm:w-3/4 text-justify text-accent1 group-hover:brightness-125">{{ item.content }}</p>
                        </div>
                    </div>                    
                </div>
            </div>
            <form class="grid w-full grid-cols-2 gap-6 lg:w-1/2"            
            v-motion
            :initial="{
              opacity: 0,
            }"
            :visibleOnce="{
              opacity: 1,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 200,
                duration: 6000
              },
            }">
                <div class="w-full col-span-2 sm:col-span-1">
                    <input type="text" id="name" placeholder="Your Name" v-model="formData.name" required class="w-full p-3 border bg-accent1 boredr-accent2 rounded-[8px]">
                </div>    
                <div class="w-full col-span-2 sm:col-span-1">
                    <input type="text" id="email" placeholder="example@gmail.com" v-model="formData.email" required class="w-full p-3 border bg-accent1 boredr-accent2 rounded-[8px]">
                </div>      
                <div class="w-full col-span-2 sm:col-span-1">
                    <input type="phone" id="phone" placeholder="+008 654 231" v-model="formData.phone" required class="w-full p-3 border bg-accent1 boredr-accent2 rounded-[8px]">
                </div> 
                <div class="w-full col-span-2 sm:col-span-1">
                    <input type="text" id="company" placeholder="Your Company's Name" v-model="formData.company" required  class="w-full p-3 border bg-accent1 boredr-accent2 rounded-[8px]">
                </div>    
                <div class="w-full col-span-2">
                    <textarea id="message" rows="5" placeholder="Briefly tell us about your project and your current goals. How can we help you?" v-model="formData.message" required class="w-full p-3 border bg-accent1 boredr-accent2 rounded-[8px]"></textarea>
                </div>    
                <button aria-label="go to contact section" class="cursor-pointer w-fit col-span-2 p-3 font-[400] text-center rounded-[8px] ms-auto me-0 shadow-sm text-accent1 bg-primary hover:brightness-125">Send Message</button>    
            </form>
        </div>
    </section>
</template>