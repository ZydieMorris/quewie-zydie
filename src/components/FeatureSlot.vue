<script setup>
defineProps({
  title: String,
  highlight: String,
  description: String,
  linkText: String,
  image: String // image path or URL
})
</script>

<template>
  <!-- Parent Card -->
  <div
    class=" mx-auto max-w-[1195px] rounded-[20px] relative overflow-hidden flex flex-col lg:flex-row justify-between items-start  "
  >
    <!-- Left Side (Text) -->
    <div class="flex flex-col justify-center w-full lg:w-1/2 relative px-4 lg:px-0 z-10 ">
      <!-- Title -->
      <div class="flex items-start mt-8 relative">
        <div
          class="absolute w-[40px] h-[40px] lg:w-[56.39px] lg:h-[51.07px] bg-[#388FF0] rounded-full flex-shrink-0"
        ></div>
        <p class="font-medium mt-1.5 ml-3 lg:ml-5 text-lg sm:text-xl lg:text-[25px] leading-[160%] z-50">
          {{ title }}:
          <span class="text-[#388FF0]">{{ highlight }}</span>
        </p>
      </div>

      <!-- Description -->
      <div class="leading-[180%] tracking-[2%]">
        <p class="-mt-3 font-normal text-sm sm:text-base lg:text-[20px] text-[#696984] px-0 lg:px-6 py-6 lg:py-10">
          {{ description }}
        </p>
        <!-- Small circle -->
        <div class="absolute rounded-full bg-[#388FF0] opacity-100 w-[15px] h-[15px] lg:w-[23.17px] lg:h-[20.99px] bottom-8 right-8"></div>
      </div>

      <!-- Link -->
      <div class="mt-3">
        <a class="underline text-[#696984] text-sm sm:text-base lg:text-[18px] font-normal ml-2 lg:ml-6">
          {{ linkText }}
        </a>
      </div>
    </div>

<!-- Right Side -->
<div class="p-5 relative w-full max-w-[544px] mx-auto flex justify-center items-center mt-4 sm:mt-6 md:mt-10">
  <!-- Black rectangle -->
  <div
    class="absolute top-0 left-0 w-[60px] h-[55px]  sm:w-[106.6px] sm:h-[96.54px] rounded-[20px] bg-[#272727] opacity-100 z-0">
  </div>

  <!-- Blue rectangle -->
  <div
    class="absolute bottom-0 right-0 w-[100px] h-[90px] sm:w-[178.44px] sm:h-[161.6px] rounded-[20px] bg-[#388FF0] opacity-100 z-0">
  </div>

  <!-- Image wrapper -->
  <div class="relative w-full aspect-[544/330] rounded-[20px] overflow-hidden">
    <img
      :src="image"
      class="relative w-full h-full object-cover rounded-[20px]  z-10"
    />
  </div>
</div>



  </div>
</template>
