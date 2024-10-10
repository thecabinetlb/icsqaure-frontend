<script setup>

defineProps({
    isFooter: Boolean,
    data: Array
})

</script>
<template>
    <a v-for="(item, key) in sociallinks" :key="key" :id="'go-to-' + item.name" :href="item.to" :target="item.target" class="h-[48px] rounded-full bg-accent1/30 flex items-center gap-2 hover:brightness-110 cursor-pointer">
        <img :src="item.icon" :alt="item.name" width="48" height="48" center cover responsive loading="lazy"/>   
        <h2 v-show="isFooter" class="px-2 font-[500]">{{ item.content }}</h2>
    </a>
</template>