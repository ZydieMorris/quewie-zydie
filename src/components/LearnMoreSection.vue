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
        <div class="flex-1 w-full">
          <!-- The QUEWIE Way -->
          <div class="flex items-start">
            <div
              class="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[56px] lg:h-[51px] bg-[#388FF0] rounded-full flex-shrink-0"
            ></div>
            <p
              class="ml-3 sm:ml-4 font-medium text-base sm:text-lg lg:text-[25px] leading-[160%]"
            >
              The QUEWIE Way:
              <span class="text-[#388FF0] block sm:inline">
                Stress-Free Service,
                <br class="hidden sm:block" />
                Happier Customers
              </span>
            </p>
          </div>

          <!-- Quewie description -->
          <div class="mt-5 leading-[180%]">
            <p
              class="ml-1 sm:ml-4 text-sm sm:text-base lg:text-[20px] font-normal text-[#696984]"
            >
              QUEWIE simplifies workflows, eases employee stress, and ensures
              faster, smoother service for happier customers.
            </p>
          </div>

          <!-- Learn More -->
          <div class="mt-6 sm:mt-8">
            <a
              class="underline text-[#696984] text-sm sm:text-base lg:text-[22px] font-normal ml-1 sm:ml-4"
              >Learn More</a
            >
          </div>
        </div>

        <!-- Right Side -->
        <div class="flex-1 w-full max-w-full lg:max-w-[600px]">
          <!-- Keep video responsive with aspect ratio -->
          <div class="relative w-full aspect-video rounded-[12px] overflow-hidden">
            <PlayVideoSlot />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
