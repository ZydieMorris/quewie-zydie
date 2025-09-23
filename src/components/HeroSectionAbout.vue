<script setup>
import PlayVideoSlot from './PlayVideoSlot.vue';


</script>

<template>

    <main class="h-[879px]  relative">
        <h1 class="pt-[142px] pl-[105px] font-semibold text-[44px] leading-[180%] text-[#272727]">About <span class="text-[#3691EF]">Us</span>
        </h1>
<!-- pARENT -->
        <div class="w-[1116px] ml-[158px]  h-[366px] flex  mt-5 justify-between ">
            <!-- Left Side -->
             <!-- Who we are -->
            <div class="mt-3  ">
                
                <h2 class="font-semibold text-[32px] leading-[180%] text-[#3691EF] ">Who We Are</h2>
                <!-- description -->
                <div class="w-[490px] flex text-justify mt-3.5">
                                    <p class="text-[22px] font-normal leading-[180%] text-[#696984] ">At QUEWIE, we believe waiting should never feel like wasted time. Founded with a vision to revolutionize the way businesses and institutions handle queues, QUEWIE combines technology, efficiency, and customer-focused innovation to transform service experiences. </p>
                </div>
            </div>

            <!-- rIGHT Side -->
            <div class="relative mt-3">
                <div >
                     <PlayVideoSlot />
                </div>
            </div>
        </div>


            <!-- Who we are -->
             <div class="font-semibold text-[32px] leading-[180%] text-[#3691EF] text-center  mt-6">Who We Are</div>
             <div class="text-center font-normal text-[22px] leading-[180%] text-[#696984] mt-5 ml-[250px] mr-[250px]">To empower businesses and organizations by simplifying queue management, reducing stress for employees, and delivering seamless, hassle-free services for customers.</div>
             <div class="w-[335px] h-[12px] bg-[#D9D9D9] absolute bottom-0 left-1/2 -translate-x-1/2"></div>
    </main>
</template>