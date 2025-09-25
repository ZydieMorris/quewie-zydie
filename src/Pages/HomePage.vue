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
    <!-- QuewieAbout Card overlapping the gray section -->
    <QuewieAbout />

    <LearnMoreSection />
    <QuewieReview />
    <Footer />
  </main>
</template>
