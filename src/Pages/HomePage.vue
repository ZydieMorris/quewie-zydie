<script setup>
import Header from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue';
import LearnMoreSection from '../components/LearnMoreSection.vue';
import QuewieAbout from '../components/QuewieAbout.vue';
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <HeroSection />

    <!-- Background wrapper -->
    <div class="relative w-full">
      <!-- Top gray part -->
      <div class="w-full h-[300px] bg-gray-200"></div>

      <!-- Bottom blue part -->
      <div class="w-full h-[650px] bg-blue-500"></div>

      <!-- QuewieAbout stays as-is -->
      <div class="absolute top-18 w-full">
        <QuewieAbout />
      </div>
    </div>

    <LearnMoreSection />
  </div>
</template>
