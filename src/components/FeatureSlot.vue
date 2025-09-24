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
<div class="left-1/2 -translate-x-1/2   h-[358.18px]  w-[1195px] rounded-[20px]   relative overflow-hidden flex justify-between items-center">

    
    <!-- Left Side -->
    <div class="flex flex-col justify-center h-full w-1/2  relative">
      <!-- Title -->
      <div class="flex items-start mt-8">
        <div class="absolute  w-[56.39px] h-[51.07px] bg-[#388FF0] rounded-full flex-shrink-0"></div>
        <p class="font-medium mt-1.5  ml-5 text-[25px] leading-[160%] z-50  " >
          {{ title }}: 
          <span class="text-[#388FF0] ">{{ highlight }}</span>
        </p>
      </div>

      <!-- Description -->
      <div class=" leading-[180%] tracking-[2%] ">
        <p class="-mt-3 font-normal text-[20px] text-[#696984]  px-6 py-10 ">
          {{ description }}
        </p>
        <!-- Small circle -->
        <div
          class="absolute rounded-full bg-[#388FF0] opacity-100 w-[23.17px] h-[20.99px] bottom-25 right-8">
        </div>
      </div>

      <!-- Link -->
      <div class="mt-3">
        <a class="underline text-[#696984] text-[18px] font-normal ml-6">
          {{ linkText }}
        </a>
      </div>
    </div>

    <!-- Right Side -->
    <div class="relative flex items-center justify-center w-1/2  h-full">
      <!-- Black rectangle -->
      <div
        class="absolute top-0 left-6 w-[90px] h-[80px] rounded-[20px] bg-[#272727] opacity-100">
      </div>
      <!-- Blue rectangle -->
      <div
        class="absolute bottom-0 right-0 w-[150px] h-[130px] rounded-[20px] bg-[#388FF0] opacity-100">
      </div>
      <!-- Image -->
      <img :src="image" class="relative left-3 h-[329.55px] w-[544.89px] object-cover rounded-[20px]" />
    </div>
  
</div>


</template>
