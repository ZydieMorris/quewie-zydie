<template>
  <div class="relative w-full max-w-[544px] mx-auto">
    <!-- Black rectangle -->
    <div
      class="absolute -top-3 -left-3 w-[80px] h-[70px] sm:w-[106.6px] sm:h-[96.54px] rounded-[20px] bg-[#272727] opacity-100">
    </div>

    <!-- Blue rectangle -->
    <div
      class="absolute -bottom-3 -right-3 w-[130px] h-[120px] sm:w-[178.44px] sm:h-[161.6px] rounded-[20px] bg-[#388FF0] opacity-100">
    </div>

    <!-- Image wrapper -->
    <div class="relative mt-3 w-full aspect-[544/330] rounded-[20px] overflow-hidden">
      <img 
        src="/images/videoslot.png"
        class="w-full h-full object-cover"
      />

    </div>

    <slot></slot>
  </div>
</template>
