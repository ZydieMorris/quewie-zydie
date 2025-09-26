<script setup></script>

<template>
  <div class="w-full relative bg-blue-400 py-20">
    <div class="w-full absolute top-0 h-[298px] bg-[#F7F7F7] "></div>
    <!-- QuewieAbout Card as Child, centered -->
    <div class="flex  relative justify-center px-4 sm:px-6 lg:px-0">
      <!-- Main Content -->
      <div
        class="w-full max-w-[1266px] bg-white rounded-[20px] shadow-[0px_6px_6.6px_-1px_#00000033] py-10 sm:py-12 px-4 sm:px-7">
        
        <!-- Title -->
        <div class="text-center">
          <p class="font-semibold text-2xl sm:text-3xl lg:text-[44px] leading-tight">
            What is <span class="text-[#2E8FF3]">QUEWIE?</span>
          </p>
        </div>

        <!-- Description -->
        <div class="text-center mt-6">
          <p class="text-base sm:text-lg lg:text-[22px] font-normal text-[#696984] leading-[180%] px-2 sm:px-8">
            QUEWIE is an innovative queue management system that eliminates the
            hassle of long, disorganized lines. It empowers users to book, track,
            and manage their spot in real time, while helping businesses and
            institutions deliver faster, more efficient, and stress-free services.
            From government offices and hospitals to banks, schools, and
            entertainment venues, QUEWIE transforms waiting into a seamless
            experience.
          </p>
        </div>

        <!-- Images / Buttons -->
        <div class=" flex flex-col justify-between lg:flex-row  gap-10  mt-12">
          
<!-- For Administrator -->
<div class="relative w-full lg:w-[49%] flex-shrink-0 ">
  <img src="/images/admin.jpg"
       class="w-full h-[360px] sm:h-[320px] lg:h-[360px] rounded-[20px] object-cover" />
  <button
    class="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2
           w-[200px] sm:w-[254px] h-[60px] sm:h-[72px] border border-white text-white
           rounded-[80px] text-sm sm:text-base ">
    For Administrator
  </button>
</div>

<!-- For Guest Experience -->
<div class="relative w-full lg:w-[49%] flex-shrink-0">
  <img src="/images/guest.png"
       class="w-full h-[360px] sm:h-[320px] lg:h-[360px]  rounded-[20px] object-cover" />
  <button
    class="absolute top-[48%] left-[50%] -translate-x-[50%] -translate-y-[50%]
           w-[200px]  sm:w-[254px] h-[60px] sm:h-[72px] bg-[#388FF0] text-white
           rounded-[80px] text-sm sm:text-base ">
    For Guest Experience
  </button>
</div>
        </div>
        
      </div>
    </div>
  </div>
</template>
