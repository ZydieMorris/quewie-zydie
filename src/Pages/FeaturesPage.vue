<script setup>
import FeatureMain from '../components/FeatureMain.vue';
import Header from '../components/Header.vue';
import QuewieReview from '../components/QuewieReview.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <main>
        <Header/>
        <FeatureMain/>
        <div class="w-full h-[50px] bg-gray-100"></div>
        <QuewieReview/>
        <Footer/>
    </main>
</template>