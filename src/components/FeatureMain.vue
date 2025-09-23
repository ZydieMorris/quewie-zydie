<script setup>
import FeaturePicSlot from './FeaturePicSlot.vue';
import FeatureSlot from './FeatureSlot.vue';
import FeatureSlotSecond from './FeatureSlotSecond.vue';
import PlayVideoSlot from './PlayVideoSlot.vue';


</script>

<template>
    <main class="h-[3599.18px] ">
        <!-- Description -->
               <p class="pt-[209px] font-semibold text-[64px] leading-[115.99999999999999%] text-[#272727] ml-[93px]">
                Features That Redefine<br>
                <span class="text-[85px] text-[#469AF0]">
                    Queue Management
                </span>
            </p>
      <!-- Learn More Card -->
         <div class="h-[3419.18px] bg-amber-200 ml-[93px] mr-[120px] mt-[87px] space-y-50
         ">
                <!-- First Box -->
     <div class="border h-[358.18px] w-[1905px] mr-[120px] mt-15 flex justify-between">
                <!-- Left Side -->
                <div class="mt-5 ">
                    <!-- The quewie way -->
                    <div class="flex ">
                        <div class="w-[56.39px] h-[51.07px] bg-[#388FF0] rounded-full"></div>
                        <p class="font-medium text-[25px] leading-[160%] z-50 mt-2 -ml-9.5">The QUEWIE Feature:<span
                                class="text-[#388FF0]">  Real-Time Queue<br> Management</span></p>
                    </div>
                    <!-- Quewie description -->
                    <div class="mt-5 leading-[180%]">
                        <p class="ml-4 font-normal text-[20px] text-[#696984]">Track, manage, and update queues instantly.<br> Customers can book their spot and get notified in<br> real-time, ensuring smoother flow and less waiting<br> frustration.</p>
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
                  <FeaturePicSlot/>
                </div>
               
            </div>

            <FeatureSlotSecond>

            </FeatureSlotSecond>

 


         </div>



         
    </main>
</template>