<script setup>
defineProps({
    data: Array
})
</script>
<template>
    <section class="flex flex-col justify-center w-10/12 h-full gap-10 pt-20 mx-auto my-32">
            <h1 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl font-[500]">The Founders</h1>
            <div class="flex flex-wrap justify-between items-center max-md:justify-center h-full md:gap-6 gap-[100px] mt-6">
                <div v-for="(item, key) in data" :key="key" class="relative lg:w-3/12 md:w-5/12 lg:flex-grow flex flex-col h-[500px] items-center justify-end rounded-[8px] w-full gap-3 p-6 bg-white transform duration-300 hover:scale-105 hover:bg-gradient hover:bg-cover hover:bg-center group">
                    <div class="absolute mx-auto w-10/12 h-[300px] transform bg-bg top-6 translate-y-6 z-1 rounded-[8px]">
                        <img :src="item.image" alt="IC2" width="298" height="429" class="aspect-0.7/1 absolute left-1/2 transform -translate-x-1/2 bottom-0" cover responsive loading="lazy"/>
                    </div>
                    <h3 class="md:text-2xl sm:text-xl text-lg font-[900] text-center text-bg group-hover:text-accent1">{{ item.name }}</h3>
                    <p class="font-[400] text-justify text-grey group-hover:text-accent2">{{ item.jobtitle }}</p>
                </div>
            </div>
    </section>
</template>
<style scoped>

</style>