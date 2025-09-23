<script setup></script>

<template>
  
   

    <!-- Main Container -->
    <div class=" relative ml-[130px] w-[1266px]  h-[799px] shadow-2xl rounded-[20px] z-50 bg-white">
      <!-- Sub-parent -->
      <div class="h-[730px] w-[1169px] relative ml-12">
        <!-- What is Quewie? -->
        <div class="text-center mt-8">
          <p class="font-semibold text-[44px]">
            What is <span class="text-[#2E8FF3]">QUEWIE?</span>
          </p>
        </div>

        <!-- About Quewie -->
        <div class="text-center mt-6">
          <p class="text-[22px] font-normal text-[#696984] leading-[180%]">
            QUEWIE is an innovative queue management system that eliminates the
            hassle of long,<br />
            disorganized lines. It empowers users to book, track, and manage
            their spot in real time, while<br />
            helping businesses and institutions deliver faster, more efficient,
            and stress-free services. From<br />
            government offices and hospitals to banks, schools, and entertainment
            venues, QUEWIE<br />
            transforms waiting into a seamless experience.
          </p>
        </div>

        <!-- Images -->
        <div class="flex justify-between mt-12 ">
          <!-- For Administrator -->
            <div class="relative" >
            <img src="/images/admin.jpg"  class="relative w-[539.54px] h-[360.15px] rounded-[20px] bg-cover bg-center flex items-center justify-center  overflow-hidden"/>
            <button
              class="absolute top-[38%] left-[40%]  w-[254.48px] h-[72.03px] border border-white text-[#FFFFFF] rounded-[80px] ">
              For Administrator
            </button>
          </div>

          <!-- For Guest Experience -->
          <div class="relative" >
            <img src="/images/guest.png"  class="relative w-[539.54px] h-[360.15px] rounded-[20px] bg-cover bg-center flex items-center justify-center  overflow-hidden"/>
            <button
              class="absolute top-[39%] left-[20%] bg-[#388FF0] w-[254.48px] h-[72.03px] text-white rounded-[80px] ">
              For Guest Experience
            </button>
          </div>
        </div>

        
      </div>
    </div>
    <!-- Main Container End -->
 
</template>
