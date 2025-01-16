<script setup>
import { ref, watch } from "vue";
import { numberToPersian, digitsToWords, wordsToPersian } from "persian-tools";

const more = ref(false);



const more_info = (e)=>{
    more.value = !more.value;
}

const formatTime = (value) => {
  if (value < 10) {
    return `0${value}`;
  }
  return String(value);
};

import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
const passwordRules = yup.string();
// const passwordRules = yup.string().required().min(8);

const timer = ref("09:22");
const price=ref(480000)
// const countdown = ref(null);
// const seconds = ref(0);
// const minutes = ref(0);
const formatNumberWithSeparator = (number, separator = ",") => {
  if (typeof number !== "number" && typeof number !== "string") {
    return number; // Return as is if not a valid input
  }

  // Convert number to string and add grouping separator
  price.value = number.toString();
  return price.value.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

const convertNumbersToPersian = (text) => {
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  let result = text;
  for (let i = 0; i < englishNumbers.length; i++) {
    const regex = new RegExp(englishNumbers[i], "g");
    result = result.replace(regex, persianNumbers[i]);
  }
  return result;
};
</script>
<template>
  <!-- Payment -->
  <div class="payment flex flex-col gap-4 bg-red-500/5 min-h-[100vh]">
    <div class="payment__header relative before:md:!h-28 before:lg:!h-16">
      <!-- title in small devices  -->
      <div
        class="header_mobile_title text-right py-5 px-4 lg:hidden text-white text-[14.5px]"
      >
        <h3 class="md:invisible lg:hidden">درگاه پرداخت اینترنتی سِپ</h3>
      </div>
      <!-- max-w-[1072px]
            header_main px-4 duration-300  bg-white rounded-xl container 
                  md:container flex items-center justify-between shadow-sm shadow-black -->
      <div
        class="header_main bg-white rounded-xl duration-300 lg:mt-6 flex items-center justify-between px-4 py-2 md:container !mx-auto !w-[95%] md:!w-[90%] md:!max-w-[1072px]"
      >
        <div class="main_logo_payment">
          <img
            src="../../../assets/images/Web-design-Shaprak.png"
            alt="Shapark Logo"
            title="شاپرک"
            class="md:w-16 md:h-[64px] w-[54px] py-2"
          />
        </div>
        <div class="center_header_payment">
            <vue-countdown
              :interval="10"
              :time="1000 * 600"
              v-slot="{ minutes, seconds }"
              class="text-sm"
              :class="{ 'text-primary_danger_color': minutes <= 3 }"
            >
          <div
            class="purchase_timer text-xs md:hidden flex items-center justify-between gap-3 px-2 rounded-md py-2 bg-lighter_bg text-primary"
            :class="{ 'bg-primary_bg_danger_color': minutes <= 3 }"
          >
            <h2 :class="{ 'text-primary_danger_color': minutes <= 3 }">
              زمان باقی مانده :
            </h2>
            <p :class="{ 'text-primary_danger_color': minutes <= 3 }" >
                {{ convertNumbersToPersian(formatTime(seconds)) }} :
                {{ convertNumbersToPersian(formatTime(minutes)) }}
            </p>

          </div>
            </vue-countdown>
          <div class="header_title hidden md:block text-[18px] text-black">
            <h1>درگاه پرداخت اینترنتی سِپ</h1>
          </div>
        </div>

        <div class="sep_logo">
          <div class="main_logo_payment">
            <img
              src="../../../assets/images/Web-design-Shaprak.png"
              alt="Shapark Logo"
              title="شاپرک"
              class="md:w-[64px] md:h-[64px] w-[54px] py-2"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- payment body [ main content ] -->
    <!-- payment_body md:container !w-[90%] md:!max-w-[1072px] flex items-center gap-4 container
             md:px-0 md:flex-row flex-col-reverse bg-red-500 -->
    <div
      class="payment_body md:container !mx-auto !w-[95%] md:!w-[90%] md:!max-w-[1072px] rounded-lg duration-300 !px-0 flex items-center gap-4 md:flex-row flex-col-reverse"
    >
      <div
        class="payment__main shadow-sm shadow-black p-4 bg-primary min-h-[80vh] md:w-2/3 rounded-lg"
      >
        <div
          class="title_payment_main text-primary bg-lighter_bg p-4 rounded-lg"
        >
          <h2 class="text-[14px] mx-4">اطلاعات کارت خود را وارد کنید</h2>
        </div>
        <!-- Payment form -->
        <div class="min-h-[70vh] mx-auto container bg-violet-700/50">
          <Form class="flex items-center justify-center bg-red-800">
            <div class="card_number flex flex-col w-full">
              <label for="card_number" class="">شماره کارت</label>
              <Field
                name="card_number"
                type="text"
                class="w-[500px] p-2 rounded-xl"
                :rules="passwordRules"
              />
              <ErrorMessage name="card_number" />
            </div>
          </Form>
        </div>
      </div>

      <div
        class="payment__side overflow-hidden shadow-sm bg-white shadow-black relative h-full duration-500 md:min-h-[80vh] w-[100%] md:w-1/3 rounded-xl"
      >
      <!-- <button
          class="more  text-xl absolute bottom-6 left-6
           bg-gray-600 p-2 rounded-lg text-white "
          @click="more_info"
        >
          {{ more ? "کمتر" : "بیشتر" }}
        </button> -->
        <button
        @click="more_info"
         class="more text-sm absolute text-light_gray bg-input_form_bg rounded-xl py-3 px-6 z-40   bottom-3 left-4 cursor-pointer select-none">
         {{ more ? 'کمتر' : 'بیشتر' }}
         </button>
        <div class="card p-4">
          <vue-countdown
            :interval="10"
            :time="1000 * 600"
            v-slot="{ minutes, seconds }"
          >
            <div
              class="purchase_timer text-base hidden md:flex items-center justify-between gap-3 rounded-lg p-4 mb-12 bg-light_bg text-primary"
              :class="{ 'bg-primary_bg_danger_color': minutes <= 3 }"
            >
              <h2 :class="{ 'text-primary_danger_color': minutes <= 3 }">
                زمان باقی مانده :
              </h2>
              <p
                class="text-base"
                :class="{ 'text-primary_danger_color': minutes <= 3 }"
              >
                {{ convertNumbersToPersian(formatTime(seconds)) }} :
                {{ convertNumbersToPersian(formatTime(minutes)) }}
              </p>
            </div>
          </vue-countdown>
          <div class="merchent relative mt-2">
            <div class="beneficiary px-2 flex flex-col gap-6" >
              <div class="merchent_store flex items-center gap-4 relative ">
                <div class="icon_store text-primary_payment_icons absolute top-1/2 translate-y-[-50%]">
                  <font-awesome-icon icon="fa-solid fa-store" class="text-xl" />
                </div>
                <div class="store_name flex flex-col gap-2 pr-10">
                  <span class="text-light_gray text-base">پذیرنده</span>
                  <h3 class="text-black_gray_text text-2xl font-semibold leading-4">طـاقـچـه</h3>
                </div>
              </div>

              <div class="merchent_store flex items-center gap-4 relative ">
                <div class="icon_store text-primary_payment_icons absolute top-1/2 translate-y-[-50%]">
                  <font-awesome-icon icon="fa-solid fa-money-bill" class="text-xl"/>
                </div>
                <div class="store_name flex flex-col pr-10">
                  <span class="text-light_gray text-base">مبلغ</span>
                  <h3 class="text-black_gray_text text-2xl">{{ convertNumbersToPersian(formatNumberWithSeparator(price))  }}  ریال</h3>
                  <span class="text-light_gray text-sm"
                    >چهل و هشت هزار تومان</span
                  >
                </div>
              </div>
            </div>
            <div
              :class="more ? 'h-40 lg:h-0' : 'overflow-hidden'"
              class="merchent_info  duration-300  mt-8 h-0 md:h-full  relative "
            >
              <div class="terminal_id flex items-center gap-2 relative ">
                <div class="icon_store text-primary_payment_icons absolute top-1/2 translate-y-[-50%]">
                  <font-awesome-icon icon="fa-solid fa-id-card" />
                </div>
                <div class="store_name flex flex-col pr-10">
                  <span class="text-light_gray text-sm"
                    >شماره پذیرنده / ترمینال</span
                  >
                  <h3 class="text-black_gray_text text-xl font-semibold">
                    {{ convertNumbersToPersian('14792369 / 13679208 ') }}
                  </h3>
                </div>
              </div>
              <div class="merchant_website flex items-center gap-2  relative">
                <div class="icon_store text-primary_payment_icons absolute top-1/2 translate-y-[-50%]">
                  <font-awesome-icon icon="fa-solid fa-id-card" />
                </div>
                <div class="store_name flex flex-col pr-10">
                  <span class="text-light_gray text-sm">سایت پذیرنده</span>
                  <h3 class="text-black_gray_text text-xl font-semibold">
                    taaghche.com
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fixed bottom-10 right-10 z-20">
    <div class="bg-gray-800 text-white rounded-full w-16 p-4 text-xl md:hidden">
      SM
    </div>
    <div
      class="hidden bg-gray-800 text-white rounded-full w-16 p-4 text-xl md:block lg:hidden"
    >
      MD
    </div>
    <div
      class="hidden bg-gray-800 text-white rounded-full w-16 p-4 text-xl lg:block xl:hidden"
    >
      LG
    </div>
    <div
      class="hidden bg-gray-800 text-white rounded-full w-16 p-4 text-xl xl:block 2xl:hidden"
    >
      XL
    </div>
    <div
      class="hidden bg-gray-800 text-white rounded-full w-16 p-4 text-xl 2xl:block 3xl:hidden"
    >
      2XL
    </div>
    <div
      class="hidden bg-gray-800 text-white rounded-full w-16 h-16 text-xl text-center 3xl:block 4xl:hidden"
    >
      3XL
    </div>
  </div>
</template>
<style></style>
