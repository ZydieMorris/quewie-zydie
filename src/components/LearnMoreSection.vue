<script setup>
import PlayVideoSlot from './PlayVideoSlot.vue';


</script>

<template>
    <!-- Parent -->
    <main class="h-[605px] relative  p-10">
        <!-- Sub-Parent -->
        <div class="h-[529px] w-[1266px] ml-[94px] rounded-[20px] shadow-2xl p-5">
            <!-- Sub-Pagyud -->
            <div class="h-[358.18px]   mt-15 flex justify-between">
                <!-- Left Side -->
                <div class="mt-5 ">
                    <!-- The quewie way -->
                    <div class="flex ">
                        <div class="w-[56.39px] h-[51.07px] bg-[#388FF0] rounded-full"></div>
                        <p class="font-medium text-[25px] leading-[160%] z-50 mt-2 -ml-9.5">The QUEWIE Way:<span
                                class="text-[#388FF0]"> Stress-Free Service,<br> Happier Customers</span></p>
                    </div>
                    <!-- Quewie description -->
                    <div class="mt-5 leading-[180%]">
                        <p class="ml-4 font-normal text-[20px] text-[#696984]">QUEWIE simplifies workflows, eases
                            employee stress,<br> and ensures faster, smoother service for happier<br> customers.</p>
                        <!-- Small circle -->
                        <div
                            class="absolute rounded-full bg-[#388FF0] opacity-100 w-[23.17px] h-[20.99px] top-72 left-148.5">
                        </div>
                    </div>
                    <!-- Learn More -->
                    <div class="mt-8">
                        <a class="underline text-[#696984] text-[22px] font-normal ml-4">Learn More</a>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="relative">
                  <PlayVideoSlot/>
                </div>

            </div>
        </div>
    </main>

</template>