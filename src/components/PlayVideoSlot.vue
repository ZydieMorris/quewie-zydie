<template>
                <div class="relative">
                    <!-- Black rectangle -->
                    <div
                        class="absolute -top-3 left-[-25px] w-[106.6px] h-[96.54px] rounded-[20px] bg-[#272727] opacity-100">
                    </div>
                    <!-- Blue rectangle -->
                    <div
                        class="absolute -bottom-6 right-[0] w-[178.44px] h-[161.6px] rounded-[20px] bg-[#388FF0] opacity-100">
                    </div>
                    <!-- Image wrapper -->
                    <div class=" mt-3 w-[544.59px] h-[329.55px]">
                        <!-- Image -->
                    <!-- Image wrapper -->
<div class="relative w-[544.59px] h-[329.55px] rounded-[20px] overflow-hidden ml-3">
  <img src="/images/learnmore.jpg" 
       class="w-[544.59px] h-[329.55px] object-cover" />
</div>


                        <!-- White circle -->
                        <img src="/images/whitecircle.png" class="absolute top-28 left-47" />
                        <!-- <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54.07px] h-[48.97px] rounded-full bg-white opacity-100"></div> -->
                        <!-- Play Button Polygon -->
                        <img src="/images/play.png" class="absolute top-42.5 left-67 object-cover " />
                    </div>
                    <slot></slot>
                </div>

</template>