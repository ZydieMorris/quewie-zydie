<script setup>
import Header from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue';
import LearnMoreSection from '../components/LearnMoreSection.vue';
import QuewieAbout from '../components/QuewieAbout.vue';
import QuewieReview from '../components/QuewieReview.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <main class="min-h-screen">
    <Header />
    <HeroSection />
    <!-- Background wrapper -->
    <div class="relative w-full">
      <!-- Top gray part -->
      <div class="w-full h-[300px] bg-gray-200"></div>

      <!-- Bottom blue part -->
      <div class="w-full h-[650px] bg-[#388FF0]"></div>

      <!-- QuewieAbout stays as-is -->
      <div class="absolute top-18 w-full">
        <QuewieAbout />
      </div>
    </div>
    <LearnMoreSection />
    <QuewieReview/>
    <Footer/>
  </main>
</template>
