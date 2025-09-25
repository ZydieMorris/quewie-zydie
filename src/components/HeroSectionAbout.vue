<script setup>
import PlayVideoSlot from './PlayVideoSlot.vue';


</script>

<template>
    <main class="relative w-full bg-white mt-20 py-12 sm:py-16 lg:py-20">
        <!-- About Us Title -->
        <h1
            class="px-4 sm:px-8 lg:px-[105px] text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[150%] text-[#272727] text-left">
            About <span class="text-[#3691EF]">Us</span>
        </h1>

        <!-- Parent Section -->
        <div
            class="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 mt-8 px-4 sm:px-8 lg:px-[158px]">
            <!-- Left Side -->
            <div class="flex-1">
                <h2 class="text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-[160%] text-[#3691EF]">
                    Who We Are
                </h2>
                <!-- description -->
                <div class="mt-4">
                    <p
                        class="text-base sm:text-lg lg:text-[22px] font-normal leading-[180%] text-[#696984] text-justify">
                        At QUEWIE, we believe waiting should never feel like wasted time.
                        Founded with a vision to revolutionize the way businesses and
                        institutions handle queues, QUEWIE combines technology, efficiency,
                        and customer-focused innovation to transform service experiences.
                    </p>
                </div>
            </div>

            <!-- Right Side (Video) -->
            <div class="flex-1 flex justify-center lg:justify-end">
                <PlayVideoSlot />
            </div>
        </div>

        <!-- Mission Section -->
        <div class="mt-12 sm:mt-16 lg:mt-20 text-center px-4 sm:px-8">
            <h2 class="font-semibold text-2xl sm:text-3xl lg:text-[32px] leading-[160%] text-[#3691EF]">
                Who We Are
            </h2>
            <p class="mt-4 text-base sm:text-lg lg:text-[22px] font-normal leading-[180%] text-[#696984]">
                To empower businesses and organizations by simplifying queue management,
                reducing stress for employees, and delivering seamless, hassle-free
                services for customers.
            </p>
        </div>

        <!-- Divider -->
        <div class="w-[150px] sm:w-[220px] lg:w-[335px] h-[12px] bg-[#D9D9D9] mx-auto mt-12"></div>
    </main>
</template>
