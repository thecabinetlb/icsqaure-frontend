<template>
    <div class="space-y-10">
      <div v-if="timeLeft.total > 0" class="flex items-center justify-center gap-3 sm:gap-10">
        <div class="lg:min-w-[145px] sm:min-w-[81px] flex flex-col items-center justify-center gap-6">
            <span class="rounded-[8px] lg:p-8 sm:p-6 p-3 grid place-content-center font-[500] 2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl tracking-widest text-accent1 shadow-lg bg-bg/30">{{ timeLeft.days }}</span>
            <span class="font-[100] 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md text-center text-accent2">Days</span>
        </div>
        <div class="lg:min-w-[145px] sm:min-w-[81px] flex flex-col items-center justify-center gap-6">
            <span class="rounded-[8px] lg:p-8 sm:p-6 p-3 grid place-content-center font-[500] 2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl tracking-widest text-accent1 shadow-lg bg-bg/30">{{ timeLeft.hours }}</span>
            <span class="font-[100] 2xl:text-3xl md:text-2xl sm:text-xl text-md text-center text-accent2">Hours</span>
        </div>
        <div class="lg:min-w-[145px] sm:min-w-[81px] flex flex-col items-center justify-center gap-6">
            <span class="rounded-[8px] lg:p-8 sm:p-6 p-3 grid place-content-center font-[500] 2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl tracking-widest text-accent1 shadow-lg bg-bg/30">{{ timeLeft.minutes }}</span>
            <span class="font-[100] 2xl:text-3xl md:text-2xl sm:text-xl text-md text-center text-accent2">Minutes</span>
        </div>
        <div class="lg:min-w-[145px] sm:min-w-[81px] flex flex-col items-center justify-center gap-6">
            <span class="rounded-[8px] lg:p-8 sm:p-6 p-3 grid place-content-center font-[500] 2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl tracking-widest text-accent1 shadow-lg bg-bg/30">{{ timeLeft.seconds }}</span>
            <span class="font-[100] 2xl:text-3xl md:text-2xl sm:text-xl text-md text-center text-accent2">Seconds</span>
        </div>
    </div>
      <div v-else class="font-[500] 2xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-center text-accent1">
        <span>The website will be live soon! Stay tuned!</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  
  const targetDate = new Date("October 21, 2024 00:00:00").getTime();
  const timeLeft = ref({ total: 0, days: "00", hours: "00", minutes: "00", seconds: "00" });
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
  
    if (difference > 0) {
      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');
      timeLeft.value = { total: difference, days, hours, minutes, seconds };
    } else {
      timeLeft.value = { total: 0, days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
  };
  
  onMounted(() => {
    calculateTimeLeft();
    const interval = setInterval(() => {
      calculateTimeLeft();
      if (timeLeft.value.total <= 0) clearInterval(interval);
    }, 1000);
  });
  </script>
  