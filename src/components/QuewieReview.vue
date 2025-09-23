<script setup>


</script>

<template>
    <!-- Parent -->
    <main class="flex justify-between w-full h-[819px] bg-[#272727] pt-[101px]">
        <!-- Left Side -->
        <div class="w-[495px] h-[588px] ml-[130px] mt-">

            <h1 class="font-semibold text-[50px] leading-[100%] text-[#FFFFFF]">People are Saying<br> About QUEWIE</h1>
            <p class="mt-[11px] text-[18px] leading-[30px] font-medium text-[#A6A6A6]">QUEWIE makes queues organized,
                efficient, and<br> stress-free—helping businesses serve faster and<br> people save time.</p>

            <!-- Qoute -->
            <img src="/images/qoute.png" class="w-[45px] h-[38px] ml-[5px] mt-[30px]" />

            <!-- Quewie born -->
            <p class="text-[18px] leading-[30px] font-medium text-[#A6A6A6] ml-[5px] mt-[30px]">QUEWIE was born from a
                shared frustration with <br>long, disorganized queues—transforming waiting into<br> a
                smarter, seamless experience for everyone.</p>

            <!-- Author -->
            <p class="font-medium text-[18px] leading-[30px] text-[#A6A6A6] mt-12">_ Brian Orbino</p>

            <!--Pictures  -->
            <div class="flex space-x-6 mt-13">
                <img src="/images/pic1.png" class="w-[66px] h-[66px] rounded-full object-cover object-top" />
                <img src="/images/pic2.jpg" class="w-[66px] h-[66px] rounded-full object-cover object-top" />
                <img src="/images/pic3.png" class="w-[66px] h-[66px] rounded-full object-cover object-top" />
                <img src="/images/pic4.jpg" class="w-[66px] h-[66px] rounded-full object-cover object-top" />
                <img src="/images/Group.png" class="w-[66px] h-[66px] rounded-full object-cover " />
            </div>
        </div>

        <!-- Right Side -->
        <div class="relative w-[612px] h-[588px] rounded-[20px] bg-[#388FF0] mr-[130px] pt-3">
           <!-- lOGO -->
            <div class=" flex flex-col justify-center items-center">
                 <img src="/images/logo.png" class="w-[126px] h-[126px]"/>
                 <p class="font-medium text-[30px] leading-[100%] text-[#FFFFFF]">Get Started</p>
            </div>
           
            <!-- iNPUT DEMO -->
            <form class="flex flex-col ml-[86px] mr-[86px] space-y-3 mt-5">
                <label class="text-[18px] leading-[100%] font-medium text-[#FFFFFF]">Email</label>
                <input type="email" placeholder="Enter your email" class="w-[440px] h-[50px] rounded-[10px] font-medium text-[14px] leading-[100%] bg-white border-none outline-0 pl-2"/>
                <label class="text-[18px] leading-[100%] font-medium text-[#FFFFFF]">Message</label>
                <input type="text" placeholder="What are you say?"  class="w-[440px] h-[80px] rounded-[10px] font-medium text-[14px] leading-[100%] bg-white border-none outline-0 pl-2 pb-5"/>
                <button class="w-full h-[60px] rounded-[10px] bg-[#272727] text-center font-semibold text-[16px] leading-[100%] text-[#FFFFFF] mt-[20px]">Request Demo</button>
            </form>
        </div>

    </main>
</template>