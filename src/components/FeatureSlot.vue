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
    class="mx-auto max-w-[1195px] h-auto rounded-[20px] relative overflow-hidden flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-0"
  >
    <!-- Left Side (Text) -->
    <div class="flex flex-col justify-center w-full lg:w-1/2 relative px-4 lg:px-0">
      <!-- Title -->
      <div class="flex items-start mt-8">
        <div
          class="absolute w-[40px] h-[40px] lg:w-[56.39px] lg:h-[51.07px] bg-[#388FF0] rounded-full flex-shrink-0"
        ></div>
        <p
          class="font-medium mt-1.5 ml-12 lg:ml-5 text-lg sm:text-xl lg:text-[25px] leading-[160%] z-50"
        >
          {{ title }}:
          <span class="text-[#388FF0]">{{ highlight }}</span>
        </p>
      </div>

      <!-- Description -->
      <div class="leading-[180%] tracking-[2%]">
        <p
          class="-mt-3 font-normal text-sm sm:text-base lg:text-[20px] text-[#696984] px-0 lg:px-6 py-6 lg:py-10"
        >
          {{ description }}
        </p>
        <!-- Small circle -->
        <div
          class="absolute rounded-full bg-[#388FF0] opacity-100 w-[15px] h-[15px] lg:w-[23.17px] lg:h-[20.99px] bottom-8 right-8"
        ></div>
      </div>

      <!-- Link -->
      <div class="mt-3">
        <a
          class="underline text-[#696984] text-sm sm:text-base lg:text-[18px] font-normal ml-2 lg:ml-6"
        >
          {{ linkText }}
        </a>
      </div>
    </div>

    <!-- Right Side (Image) -->
    <div class="relative flex items-center justify-center w-full lg:w-1/2">
      <!-- Black rectangle -->
      <div
        class="hidden lg:block absolute top-0 left-6 w-[90px] h-[80px] rounded-[20px] bg-[#272727] opacity-100"
      ></div>
      <!-- Blue rectangle -->
      <div
        class="hidden lg:block absolute bottom-0 right-0 w-[150px] h-[130px] rounded-[20px] bg-[#388FF0] opacity-100"
      ></div>
      <!-- Image -->
      <img
        :src="image"
        class="relative lg:left-3 w-full max-w-[544.89px] h-auto object-cover rounded-[20px]"
      />
    </div>
  </div>
</template>
