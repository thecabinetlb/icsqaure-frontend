<script setup>
import logo from '/biglogo.svg'
import facebook from '/images/socials/facebook.svg'
import linkedin from '/images/socials/linkedin.svg'
import instagram from '/images/socials/instagram.svg'
const socials = [
{ id: 1, name:"Facebook", content: 'Follow us on Facebook', link:"/", target:"_blank", icon:facebook },
{ id: 2, name:"Instagram", content: 'Follow us on Instagram', link:"/", target:"_blank", icon:instagram },
{ id: 3, name:"Linkedin", content: 'Follow us on Linkedin', link:"/", target:"_blank", icon:linkedin },
];
const footerlinks = [
  {
  id: 1,
  name: "Quick Links",
  submenu: [
    { id: 1, name: "About Us" },
    { id: 2, name: "Contact Us" },
  ]
  },
  { 
    id: 2, 
    name: 'Services', 
    to: '/services',
    submenu: [
      { id: 1, name: 'Consulting' },
      { id: 2, name: 'Digital Templates' },
      { id: 3, name: 'SaaS' },
      { id: 4, name: 'Bespoke Solutions' }
    ]
  }, 
  {
  id: 3,
  name: "Industries",
  submenu: [
    { id: 1, name: "Smart Cities" },
    { id: 2, name: "Food & Beverage" }
  ]
  }
];
</script>

<template>
    <footer class="flex flex-col items-center justify-center gap-10 pt-20 bg-center bg-cover bg-gradient">
        <div class="flex flex-wrap justify-between w-10/12 mx-auto">
            <div class="w-full mb-10 lg:w-[20%] lg:mb-0">
                <img :src="logo" alt="IC2" width="65" height="70" class="mx-auto" center cover responsive loading="lazy"/>
            </div>
            <ul role="list" class="flex flex-wrap justify-between w-full gap-y-3 lg:gap-0 lg:w-3/4 list-style-none">
                <li v-for="(item, key) in footerlinks" :key="key" class="w-1/2 lg:w-1/4 sm:w-1/3">
                    <h1 class="text-lg font-[500] text-accent1 lg:mb-4 mb-2">
                        {{ item.name }}
                    </h1>
                    <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="text-accent2 text-sm font-[400]">
                        {{ subitem.name }}
                    </div>                
                </li>
                <li class="flex flex-col w-1/2 gap-3 lg:w-1/4 sm:w-1/3">
                    <div v-for="(item, key) in socials" :key="key" class="h-[48px] rounded-full bg-accent1/30 flex items-center gap-2 hover:brightness-110 cursor-pointer">
                        <img :src="item.icon" :alt="item.name" width="48" height="48" center cover responsive loading="lazy"/>                
                        <h2 class="text-sm font-[500]">{{ item.content }}</h2>
                    </div>
                </li>
            </ul>
        </div>
        <p class="text-accent1 font-[400] text-center min-h-[50px] w-full mt-10 bg-bg/30 flex justify-center items-center">Copyright @ IC2 All Rights Reserved.</p>
    </footer>
</template>