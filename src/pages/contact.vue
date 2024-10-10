<script setup>
import Contact from '../components/ContactForm.vue'
import call from '/images/contact/call.svg'
import time from '/images/contact/time.svg'
import location from '/images/contact/location.svg'
const contactinfo = [
{ id: 1, name: 'Call Today', content:"+1 800 100 900", link:"/", target:"_blank", icon:call },
{ id: 2, name: 'Monday To Friday', content:"9AM - 5PM", link:"/", target:"_blank", icon:time },
{ id: 3, name: 'Office', content:"195 Devonshire St Boston, MA 02110", link:"/", target:"_blank", icon:location },
];
</script>
<template><main class="mt-32"><Contact :data="contactinfo"/></main></template>