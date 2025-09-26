<script setup>
import PlayVideoSlot from './PlayVideoSlot.vue';
</script>

<template>
  <!-- Parent -->
  <main class="flex justify-center relative px-4 sm:px-6 lg:px-10 py-10">
    <!-- Sub-Parent -->
    <div
      class="w-full max-w-[1266px] rounded-[20px] shadow-[0px_8px_7.3px_1px_#00000008] p-6 sm:p-10 bg-white"
    >
      <!-- Content Container -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-10">
        <!-- Left Side -->
        <div class="flex-1 w-full ">
          <!-- The QUEWIE Way -->
          <div class="flex items-start">
            <!-- Circle blue -->
            <div
              class="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[56px] lg:h-[51px] bg-[#388FF0] rounded-full flex-shrink-0"
            ></div>
            <p class="  -ml-5 mt-1 sm:-ml-9 font-medium text-base sm:text-lg lg:text-[25px] leading-[160%]">
              The QUEWIE Way:
              <span class="text-[#388FF0] ">
                Stress-Free Service,
                <br class="hidden sm:block" />
                Happier Customers
              </span>
            </p>
          </div>

          <!-- Quewie description -->
          <div class="mt-5 leading-[180%] relative">
            <p
              class="ml-1 sm:ml-4 text-sm sm:text-base lg:text-[20px] font-normal text-[#696984]"
            >
              QUEWIE simplifies workflows, eases employee stress, and ensures
              faster, smoother service for happier customers.
            </p>
             <div class="absolute top-15 right-5 h-[20.99px] w-[23.17px] rounded-full bg-[#388FF0]"></div>
          </div>

          <!-- Learn More -->
          <div class="mt-6 sm:mt-8">
            <a
              class="underline text-[#696984] text-sm sm:text-base lg:text-[22px] font-normal ml-1 sm:ml-4"
              >Learn More</a
            >
          </div>

         
        </div> 


          <!-- Keep video responsive with aspect ratio -->
  <!-- Right Side (Video) -->
  <div class="flex-1 w-full flex justify-center lg:justify-end items-center">
    <div class="w-full sm:w-[400px] lg:w-[544px]">
      <PlayVideoSlot class="w-full h-auto" />
    </div>
  </div>
        </div>
      </div>
  
  </main>
</template>
