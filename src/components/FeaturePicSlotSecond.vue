<template>



                <div class="relative">
                    <!-- Black rectangle -->
                    <div
                        class="absolute -top-3 left-[-25px] w-[106.6px] h-[96.54px] rounded-[20px] bg-[#272727] opacity-100">
                    </div>
                    <!-- Blue rectangle -->
                    <div
                        class="absolute -bottom-3.5 right-[0] w-[178.44px] h-[161.6px] rounded-[20px] bg-[#388FF0] opacity-100">
                    </div>
                    <!-- Image wrapper -->
                    <div class=" mt-3 w-[544.59px] h-[329.55px]">
                        <!-- Image -->
                        <img src="/images/learnmore.jpg"
                            class=" relative w-full h-full rounded-[20px] object-cover -ml-3 " />

                       
                        
                    </div>
                    <slot></slot>
                </div>

</template>