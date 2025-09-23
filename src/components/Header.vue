<script setup>

</script>

<template>
    <header
        class=" flex fixed  bg-white justify-between items-center bg[#ffffff] h-[94px] w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)] pl-[85px] pr-[85px] text-[16px] font-normal z-100">

        <!-- Logo -->
        <div class="">
            <img src="/images/quewielogo.png" class="h-[76px] w-[206px]" />
        </div>
        <!-- Nav -->
        <div class=" space-x-13 -ml-[450px] text-black">
            <RouterLink to="/" class="">HOME</RouterLink>
            <RouterLink to="/aboutus" class="">ABOUT US</RouterLink>
            <RouterLink to="/features" class="">FEATURES</RouterLink>
            <RouterLink to="/solutions" class="">SOLUTIONS</RouterLink>

        </div>
        <!-- Login/Logout -->
        <div class="flex justify-end space-x-3">
            <button>Login</button>
            <button class="bg-[#3691EF] text-white rounded-[5px]  w-[96px] h-[32px]">Sign up</button>

        </div>

    </header>

</template>