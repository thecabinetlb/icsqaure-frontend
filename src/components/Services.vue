<script scoped>
import { RouterLink } from 'vue-router'

</script>
<template>
    <section class="flex flex-col items-center justify-center w-full h-full py-20 bg-center bg-cover bg-gradient">
        <div class="flex flex-wrap justify-between w-10/12 mx-auto">
            <div class="flex flex-col w-full gap-6 md:w-1/2">
                <h1 class="text-accent1 uppercase lg:text-5xl sm:text-4xl text-3xl font-[500]">Our Mission</h1>
                <p class="font-[400] text-justify text-accent2 2xl:w-1/2 w-2/3">Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.Lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <RouterLink id="go-to-mission-page" aria-label="go to mission page" to="/mission" class="cursor-pointer px-4 py-3 w-1/4 font-[400] text-center rounded-[8px] shadow-sm text-accent1 bg-primary hover:brightness-125">Read More</RouterLink>
            </div>
            <div class="w-full md:w-1/2">
                <img src="/images/mission/mission.webp" alt="IC2" width="505" height="492" center cover responsive loading="lazy" class="ms-auto me-0"/>
            </div>
        </div>
    </section>
</template>