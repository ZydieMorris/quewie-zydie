<script setup>
import FeatureTopPicSlot from './FeaturePicSlot.vue';
import PlayVideoSlot from './PlayVideoSlot.vue';
import FeaturePicSlot from './FeaturePicSlot.vue';
import FeaturePicSlotSecond from './FeaturePicSlotSecond.vue';


</script>
<template>
    <!-- First Box -->
     <div class="border w-[1905px] mr-[120px] mt-15 flex justify-between">
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
                  <FeaturePicSlotSecond/>
                </div>
                <slot></slot>
            </div>
</template>