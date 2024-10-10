<script setup>

defineProps({
    isFooter: Boolean,
    data: Array
})

</script>
<template>
    <div v-for="(item, key) in data" :key="key" class="h-[48px] rounded-full bg-accent1/30 flex items-center gap-2 hover:brightness-110 cursor-pointer">
        <img :src="item.icon" :alt="item.name" width="48" height="48" center cover responsive loading="lazy"/>                
        <h2 v-show="isFooter" class="px-2 font-[500]">{{ item.content }}</h2>
    </div>
</template>