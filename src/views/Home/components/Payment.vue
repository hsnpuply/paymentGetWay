<script setup>
import { ref } from 'vue';

</script>
<template>
    <div class="payment">
        <div class="payment__header relative before:lg:!h-[64px]  ">

            <div class="header_mobile_title  text-right py-5 px-4 text-white  text-[14.5px]">
                <h3 class="md:hidden">درگاه پرداخت اینترنتی سِپ</h3>
            </div>
            <div class="header_main px-4  bg-white rounded-lg  mx-8 md:container flex items-center justify-between shadow-sm shadow-black">
                <div class="main_logo_payment ">
                    <img src="../../../assets/images/Web-design-Shaprak.png" alt="Shapark Logo" title="شاپرک" 
                    class="md:w-[64px] md:h-[64px] w-[54px] py-2"
                    >
                </div>
                <div class="center_header_payment">
                    <div class="timer_payment text-[12px] md:hidden flex items-center
                     justify-between gap-3 px-2 rounded-md py-2 bg-light_bg text-primary
                     ">
                        <p>09:45</p>
                        <h2>: زمان باقی مانده</h2>
                    </div>
                    <div class="header_title hidden md:block text-[18px] text-black">
                        <h1>درگاه پرداخت اینترنتی سِپ</h1>
                    </div>

                </div>

                <div class="sep_logo">
                    <div class="main_logo_payment  ">
                    <img src="../../../assets/images/Web-design-Shaprak.png" alt="Shapark Logo" title="شاپرک" 
                    class="md:w-[64px] md:h-[64px] w-[54px] py-2"
                    >
                </div>
                </div>


            </div>
        </div>
        <div class="payment__main bg-primary min-h-[40vh]">
            <p>Lorem main</p>

        </div>
        <div class="payment__side bg-primary_green_color min-h-[30vh]">
            <p>Lorem Side</p>
        </div>
    </div>
</template>
<style>

</style>