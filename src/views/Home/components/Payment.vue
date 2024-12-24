<script setup>

import { ref } from 'vue';

const more=ref(false)
</script>
<template>
    <div class="payment flex flex-col  gap-4 bg-red-500/5 min-h-[100vh] ">
        <div class="payment__header relative before:lg:!h-[64px]  ">

            <div class="header_mobile_title  text-right py-5 px-4 text-white  text-[14.5px]">
                <h3 class="md:hidden">درگاه پرداخت اینترنتی سِپ</h3>
            </div>
            <div
                class="header_main px-4 duration-300  bg-red-500 rounded-lg  mx-8 md:container flex items-center justify-between shadow-sm shadow-black">
                <div class="main_logo_payment ">
                    <img src="../../../assets/images/Web-design-Shaprak.png" alt="Shapark Logo" title="شاپرک"
                        class="md:w-[64px] md:h-[64px] w-[54px] py-2">
                </div>
                <div class="center_header_payment">
                    <div class="purchase_timer text-[12px] md:hidden flex items-center
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
                            class="md:w-[64px] md:h-[64px] w-[54px] py-2">
                    </div>
                </div>


            </div>
        </div>
        <div class="payment_body   bg-gray-500/80   flex items-center
         gap-2 container md:px-0 md:flex-row-reverse flex-col-reverse ">

            <div class="payment__main bg-primary min-h-[80vh] w-[100%] md:w-2/3  rounded-lg ">
                <p>Lorem main</p>
                <p>Lorem main</p>
                <p>Lorem main</p>
                <p>Lorem main</p>
            </div>

            <div
                class="payment__side relative bg-primary_green_color bg-white h-full   duration-500 md:min-h-[80vh] w-[100%] md:w-1/3  rounded-lg">
                <button class="more md:hidden text-xl absolute bottom-6 left-6 bg-gray-600
                  p-2 rounded-lg text-white cursor-pointer" @click="more = !more">{{ more ? 'کمتر' : 'بیشتر'  }}</button>
                <div class="card ">
                    <div class="purchase_timer text-[12px] hidden md:block flex items-center
                     justify-between gap-3 px-2 rounded-md py-2 bg-light_bg text-primary
                     ">
                        <p>09:45</p>
                        <h2>: زمان باقی مانده</h2>
                    </div>
                    <div class="merchent border-t-2 border-gray-500 mt-2">
                        <div class="beneficiary px-2 ">
                            <div class="merchent_store flex items-center gap-2">
                                <div class="icon_store text-primary_payment_icons">
                                    <font-awesome-icon icon="fa-solid fa-store" />
                                </div>
                                <div class="store_name flex flex-col">
                                    <span class="text-light_gray text-sm">پذیرنده</span>
                                    <h3 class="text-black_gray_text text-xl">طاقچه</h3>
                                </div>
                            </div>

                            <div class="merchent_store flex items-center gap-2">
                                <div class="icon_store text-primary_payment_icons">
                                    <font-awesome-icon icon="fa-solid fa-money-bill" />
                                </div>
                                <div class="store_name flex flex-col">
                                    <span class="text-light_gray text-sm">مبلغ</span>
                                    <h3 class="text-black_gray_text text-xl">480,000 ریال
                                    </h3>
                                    <span class="text-light_gray text-xs">چهل و هشت هزار تومان</span>
                                </div>
                            </div>
                        </div>
                        <div :class="more ? 'h-40' : ''" 
                        class="merchent_info border-t-2 duration-[400ms] border-gray-500 mt-2
                          h-0 overflow-hidden">
                            <div class="terminal_id flex items-center gap-2">
                                <div class="icon_store text-primary_payment_icons">
                                    <font-awesome-icon icon="fa-solid fa-id-card" />
                                </div>
                                <div class="store_name flex flex-col">
                                    <span class="text-light_gray text-sm">شماره پذیرنده / ترمینال</span>
                                    <h3 class="text-black_gray_text text-xl font-semibold">14792369 / 13679208</h3>
                                </div>
                            </div>
                            <div class="merchant_website flex items-center gap-2">
                                <div class="icon_store text-primary_payment_icons">
                                    <font-awesome-icon icon="fa-solid fa-id-card" />
                                </div>
                                <div class="store_name flex flex-col">
                                    <span class="text-light_gray text-sm">سایت پذیرنده</span>
                                    <h3 class="text-black_gray_text text-xl font-semibold">taaghche.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>
<style>

</style>