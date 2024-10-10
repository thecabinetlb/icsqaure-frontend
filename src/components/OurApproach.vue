<script setup>
defineProps({
    data: Array
})
</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-full py-20 bg-center bg-cover bg-gradient">
        <div class="flex flex-wrap justify-between w-10/12 gap-10 mx-auto lg:gap-0">
            <div class="flex flex-col justify-center w-full gap-6 lg:w-1/2">
                <h1 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl font-[500]">Our Approach</h1>
                <p class="font-[400] text-justify text-accent2 lg:w-3/4">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.Lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div class="relative w-full lg:w-1/2">
                <div v-for="(item, key) in data" :key="key" :style="{ backgroundImage: `url(${item.image})` }"  class="bg-center bg-cover">
                    <!-- <img :src="item.image" :alt="item.title" width="303" height="303" cover responsive loading="lazy"/> -->
                    <h3 class="md:text-2xl sm:text-xl text-lg font-[900] text-accent1">{{ item.name }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>