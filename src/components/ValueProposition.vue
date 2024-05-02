<script setup>

</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-full">
        <div class="flex flex-wrap justify-between gap-10 pt-40 mx-auto md:pt-0 lg:gap-0">
            <div class="flex flex-col justify-center w-10/12 mx-auto md:ms-[8.333333%] gap-6 md:w-5/12">
                <span class="px-3 py-2 w-1/3 rounded-[8px] bg-primary"></span>
                <h1 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl font-[500]">Value Proposition</h1>
                <p class="font-[400] text-justify text-accent2 lg:w-3/4">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.Lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div class="relative w-10/12 md:w-5/12 ms-auto me-0 z-[-1]"
            v-motion
              :initial="{
                x: 100,
              }"
              :visibleOnce="{
                x: 0,
                transition: {
                  type: 'spring',
                  stiffness: '100',
                  delay: 200,
                  duration: 6000,
                },
              }">
                <img src="/images/valueproposition/valueproposition.webp" alt="IC2" width="100%" height="100%" center cover responsive loading="lazy" class="aspect-square"/>
            </div>
        </div>
    </section>
</template>