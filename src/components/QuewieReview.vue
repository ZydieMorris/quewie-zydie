<script setup></script>

<template>
  <div class="w-full bg-[#272727]">
    <main
      class="pb-5 flex flex-col lg:flex-row justify-between w-full pt-10 lg:pt-[101px] gap-10 lg:gap-0 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10"
    >
      <!-- Left Side -->
      <div class="flex-1 max-w-lg lg:max-w-[495px]">
        <h1
          class="font-semibold text-[36px] sm:text-[42px] lg:text-[50px] leading-[110%] text-white"
        >
          People are Saying<br /> About QUEWIE
        </h1>
        <p
          class="mt-3 sm:mt-4 text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] font-medium text-[#A6A6A6]"
        >
          QUEWIE makes queues organized, efficient, and<br
            class="hidden sm:inline"
          />
          stress-free—helping businesses serve faster and people save time.
        </p>

        <!-- Quote -->
        <img
          src="/images/qoute.png"
          class="w-10 h-10 sm:w-[45px] sm:h-[38px] mt-6"
        />

        <p
          class="text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] font-medium text-[#A6A6A6] mt-4"
        >
          QUEWIE was born from a shared frustration with
          <br class="hidden sm:inline" />long, disorganized queues—transforming
          waiting into a smarter, seamless experience for everyone.
        </p>

        <p
          class="font-medium text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#A6A6A6] mt-6"
        >
          _ Brian Orbino
        </p>

        <!-- Pictures -->
        <div class="flex space-x-3 sm:space-x-6 mt-6 sm:mt-8 flex-wrap">
          <img
            src="/images/pic1.png"
            class="w-12 h-12 sm:w-[66px] sm:h-[66px] rounded-full object-cover object-top"
          />
          <img
            src="/images/pic2.jpg"
            class="w-12 h-12 sm:w-[66px] sm:h-[66px] rounded-full object-cover object-top"
          />
          <img
            src="/images/pic3.png"
            class="w-12 h-12 sm:w-[66px] sm:h-[66px] rounded-full object-cover object-top"
          />
          <img
            src="/images/pic4.jpg"
            class="w-12 h-12 sm:w-[66px] sm:h-[66px] rounded-full object-cover object-top"
          />
          <img
            src="/images/Group.png"
            class="w-12 h-12 sm:w-[66px] sm:h-[66px] rounded-full object-cover object-top"
          />
        </div>
      </div>

      <!-- Right Side -->
      <div
        class="flex-1 max-w-lg lg:max-w-[612px] bg-[#388FF0] rounded-[20px] p-6 sm:p-8 lg:p-10"
      >
        <!-- Logo -->
        <div class="flex flex-col justify-center items-center mb-6 sm:mb-8">
          <img
            src="/images/logo.png"
            class="w-24 h-24 sm:w-[126px] sm:h-[126px]"
          />
          <p
            class="font-medium text-[24px] sm:text-[30px] leading-[100%] text-white mt-2"
          >
            Get Started
          </p>
        </div>

        <!-- Input Form -->
        <form class="flex flex-col space-y-3">
          <label class="text-[16px] sm:text-[18px] font-medium text-white"
            >Email</label
          >
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full h-[50px] sm:h-[50px] rounded-[10px] font-medium text-[14px] sm:text-[14px] bg-white border-none outline-none p-2"
          />

          <label class="text-[16px] sm:text-[18px] font-medium text-white"
            >Message</label
          >
          <textarea
            placeholder="What are you say?"
            class="w-full h-[80px] sm:h-[80px] rounded-[10px] font-medium text-[14px] sm:text-[14px] bg-white border-none outline-none p-4"
          />

          <button
            class="w-full h-[50px] sm:h-[60px] rounded-[10px] bg-[#272727] text-white font-semibold text-[16px] sm:text-[16px] mt-4"
          >
            Request Demo
          </button>
        </form>
      </div>
    </main>
  </div>
</template>
