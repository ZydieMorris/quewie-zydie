<script setup>
</script>

<template>
  <div class="w-full bg-[#2F2F2F] ">
    <!-- Main Content -->
    <div class="px-6 md:px-[130px] max-w-[1400px] mx-auto">
      <!-- Logo -->
      <h1
        class="font-semibold text-[32px] md:text-[50px] leading-[30px] pt-[40px] md:pt-[88px] text-white text-center md:text-left"
      >
        QUE<span class="text-[#388FF0]">WIE</span>
      </h1>

      <!-- Email Enter -->
      <div
        class="flex flex-col md:flex-row items-center md:justify-between mt-8 relative space-y-4 md:space-y-0"
      >
        <p
          class="font-medium text-[16px] md:text-[18px] leading-[30px] text-[#A6A6A6] text-center md:text-left"
        >
          Get started now, try our product
        </p>

        <!-- Input with button -->
        <div class="relative w-full md:w-[851px]">
          <input
            type="email"
            placeholder="Enter your email here"
            class="w-full h-[50px] md:h-[60px] rounded-[70px] font-medium leading-[30px] text-[16px] md:text-[18px] text-[#A6A6A6] border-2 border-[#A6A6A6] pl-6 md:pl-10 pr-14"
          />
          <button
            class="absolute right-2 top-1/2 -translate-y-1/2 h-[40px] w-[40px] md:h-[46px] md:w-[46px] bg-[#388FF0] rounded-full flex items-center justify-center"
          >
            <img src="/images/Vector.png" class="h-[16px] w-[16px]" />
          </button>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="flex flex-col md:flex-row justify-between items-center text-white font-medium text-[14px] md:text-[18px] leading-[30px] mt-6 pb-6 space-y-4 md:space-y-0"
      >
        <p class="text-center md:text-left">
          © 2025 J7 IT Solutions. Copyright and rights reserved
        </p>

        <div class="flex items-center space-x-2">
          <p>Terms and Conditions</p>
          <div class="h-[4px] w-[4px] rounded-full bg-[#A6A6A6]"></div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  </div>
</template>
