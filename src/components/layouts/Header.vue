<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '/ic2logo.webp'
const navlinks = [
  {
    id: 1,
    name:"Home",
    to: '/'
  },
  {
    id: 2,
    name:"About",
    to: '/about'
  },
  { 
    id: 3, 
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
    id: 4,
    name: "Industries",
    to: '/industries',
    submenu: [
        { id: 1, name: "Smart Cities" },
        { id: 2, name: "Food & Beverage" }
    ]
  }
];
const hasSubMenu = ref(false)
const openSubMenu = ref(null)
const isOpen = ref(false)

const changeColor = () => {
  if (window.scrollY > 10) {
    changecolor.value = true;
  } else {
    changecolor.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", changeColor);
})

onUnmounted(() => {
  window.removeEventListener("scroll", changeColor);
})

const toggleSubMenu = (item) => {
  hasSubMenu.value = item.submenu ? true : false
  openSubMenu.value = openSubMenu.value !== item.id ? item.id : null
}
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

</script>
<template>
 <header class="fixed inset-0 z-[10] h-[74px] lg:flex justify-around items-center mx-auto lg:px-6 py-3 shadow-sm bg-bg">
    <img :src="logo" alt="IC2 logo" width="45" height="54" class="max-lg:ms-6" center responsive/>
    <!-- Desktop -->
    <nav class="items-center justify-between hidden gap-6 lg:flex">
      <div v-for="(item, key) in navlinks" :key="key" class="relative">
        <RouterLink :id="item.name" :aria-label="'go to' + item.name" :to="item.to" class="px-3 cursor-pointer text-lg font-[400] text-accent1 group"
        @mouseenter="openSubMenu = item.id, hasSubMenu = item.submenu ? true : false">
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent1 group-hover:w-full transition-all duration-600"></span>
        </RouterLink>
        <nav v-if="hasSubMenu && openSubMenu === item.id" class="lg:w-[250px] h-fit lg:absolute left-0 top-[60px] space-y-3 p-6 lg:bg-bg" @mouseleave="hasSubMenu = false">
            <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="relative cursor-pointer font-[400] text-accent1 text-lg drop-shadow-md group">
              {{ subitem.name }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent1 group-hover:w-full transition-all duration-600"></span>
            </div>
        </nav>
      </div> 
    </nav>   
    <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="#contact" class="max-lg:absolute right-0 me-20 top-4 w-32 h-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[8px] shadow-sm text-accent1 bg-primary hover:brightness-125">Contact Us</RouterLink>
    <!-- Mobile -->
    <button aria-label="open menu" class="absolute flex items-center justify-center w-6 h-6 lg:hidden right-6 top-7" @click="toggleOpen">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" fill="white" viewBox="0 0 50 50">
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
      </svg>   
      <Transition>
      <h1 v-if="isOpen" class="text-2xl text-accent1">&#10005;</h1>
      </Transition> 
    </button>
    <Transition>
    <nav v-show="isOpen" class="w-full p-6 space-y-6 lg:hidden bg-bg">
      <div v-for="(item, key) in navlinks" :key="key">
        <RouterLink :id="item.name" :aria-label="'go to' + item.name" :to="item.to" class="w-6/12 cursor-pointer font-[400] text-accent1 drop-shadow-md group"
        @click="toggleSubMenu(item)">
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent1 group-hover:w-full transition-all duration-600"></span>
        </RouterLink>
        <nav v-if="hasSubMenu && openSubMenu === item.id" class="w-full p-4 space-y-4">
            <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="w-32 cursor-pointer font-[400] text-accent1 drop-shadow-md group">
              {{ subitem.name }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent1 group-hover:w-full transition-all duration-600"></span>
            </div>
        </nav>
      </div>
    </nav>      
    </Transition>
  </header>
</template>