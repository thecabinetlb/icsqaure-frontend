<script setup>
import OurApproach from '../components/OurApproach.vue'
import Founders from '../components/Founders.vue'
import Keys from '../components/Keys.vue'
import founder1 from '/images/insidepages/about/founders/founder1.webp'
import founder2 from '/images/insidepages/about/founders/founder2.webp'
import founder3 from '/images/insidepages/about/founders/founder3.webp'
import key1 from '/images/insidepages/about/keys/key1.svg'
import key1opened from '/images/insidepages/about/keys/key1opened.svg'
import approach1 from '/images/insidepages/about/ourapproach/approach1.webp'

const foundersdata = [
  { 
    name: 'Jacob Anderson',
    jobtitle: 'CTO',
    image: founder1
  },
  {
    name: 'Pierre Malcon',
    jobtitle: 'CFO',
    image: founder2
  },
  {
    name: 'Gerardo Lipton',
    jobtitle: 'CEO',
    image: founder3
  }
];
const keys = [
{ id: 1, name: 'Lorem ipsum1', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon:key1, iconopened:key1opened },
{ id: 2, name: 'Lorem ipsum2', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon:key1, iconopened:key1opened },
{ id: 3, name: 'Lorem ipsum3', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon:key1, iconopened:key1opened },
{ id: 4, name: 'Lorem ipsum4', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon:key1, iconopened:key1opened }
];
const ourapproach = [
{ id: 1, name: 'Lorem ipsum1', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image:approach1},
{ id: 2, name: 'Lorem ipsum2', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image:approach1},
// { id: 3, name: 'Lorem ipsum3', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon:approach1},
];
</script>
<template>
<main>
  <Founders :data="foundersdata"/>
  <OurApproach :data="ourapproach"/>
  <Keys :data="keys"/>
</main>
</template>