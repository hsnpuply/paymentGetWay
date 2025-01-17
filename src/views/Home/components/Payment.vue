<script setup>
import { ref, reactive } from "vue";
import { numberToPersian, digitsToWords, wordsToPersian } from "persian-tools";
import thick_img from '../../../assets/images/thick.png'
import no_thick_img from '../../../assets/images/no_thick.png'

const more = ref(false);
const state= reactive({
  saving:{
    isSave:false
  }
})
const toggle_save_mode = ()=>{
  state.saving.isSave = !state.saving.isSave
}


const more_info = (e) => {
  more.value = !more.value;
};

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
const price = ref(480000);
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
              <p :class="{ 'text-primary_danger_color': minutes <= 3 }">
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
        class="payment__main shadow-sm shadow-black p-4 bg-primary md:min-h-[80vh] w-[100%] md:w-2/3 rounded-lg"
      >
        <div
          class="title_payment_main hidden md:block text-primary bg-lighter_bg p-4 rounded-lg"
        >
          <h2 class="text-[14px] mx-4">اطلاعات کارت خود را وارد کنید</h2>
        </div>
        <!-- Payment form -->
        <div class="min-h-[70vh] mx-auto container bg-violet-700/50">
          <div class="form lg:mx-10">
            <Form
              class="flex items-center justify-center flex-col gap-2"
              @submit.prevent=""
            >
              <div class="card_number flex flex-col w-full">
                <label for="card_number" class="mb-1">شماره کارت</label>
                <div class="input_card_number relative">
                  <font-awesome-icon
                    icon="fa-solid fa-store"
                    class="text-xl absolute bottom-1/2 translate-y-[50%] left-4"
                  />
                  <Field
                    name="card_number"
                    type="text"
                    maxlength="19"
                    minlength="16"
                    class="card_number_input relative w-full h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                </div>
                <ErrorMessage name="card_number" />
              </div>

              <div class="cvv2 flex flex-col w-full">
                <label for="cvv2" class="mb-1">
                  شماره شناسایی دوم (CVV2)
                </label>
                <div class="input_cvv2 relative">
                  <font-awesome-icon
                    icon="fas fa-keyboard"
                    class="text-xl absolute bottom-1/2 translate-y-[50%] left-4"
                  />
                  <Field
                    name="cvv2"
                    type="text"
                    maxlength="9"
                    minlength="5"
                    class="cvv2_input relative w-full h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                </div>
                <ErrorMessage name="cvv2" />
              </div>

              <div class="expire_date flex flex-col w-full">
                <h2 class="text-right w-full mb-2">تاریخ انقضا</h2>
                <div class="input_cvv2 relative flex gap-4">
                  <font-awesome-icon
                    icon="fas fa-keyboard"
                    class="text-xl absolute bottom-2/3 translate-y-[50%] left-4"
                  />
                  <Field
                    name="exp_month"
                    type="text"
                    placeholder="ماه"
                    class="exp_month_input relative w-1/2 h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                  <Field
                    name="exp_year"
                    type="text"
                    placeholder="سال"
                    class="exp_year_input relative w-1/2 h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                </div>
                <ErrorMessage name="exp_month" />
                <ErrorMessage name="exp_year" />
              </div>
              <div class="security_code flex flex-col w-full mb-1">
                <h2 class="text-right w-full mb-2">کد امنیتی</h2>
                <div class="input_cvv2 relative flex gap-4">
                  <font-awesome-icon
                    icon="fas fa-keyboard"
                    class="text-xl absolute bottom-2/3 translate-y-[50%] left-4"
                  />
                  <Field
                    name="security_code"
                    type="text"
                    placeholder="کد امنیتی"
                    class="security_code_input relative w-2/3 h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                  <div
                    class="security_img flex items-start justify-center flex-col"
                  >
                    <img
                      src="./../../../assets/images/captcha.jpg"
                      alt=""
                      class="max-w-[162px] lg:max-w-[146px] lg:max-h-[68]"
                    />
                    <div class="play_security_code flex w-full justify-center">
                      <font-awesome-icon icon="fa-solid fa-volume" class="" />
                      <p>پخش صوتی</p>
                    </div>
                  </div>
                </div>
                <ErrorMessage name="security_code" />
              </div>

              <div class="pin2 flex flex-col w-full">
                <h2 class="text-right w-full mb-2">رمز دوم</h2>
                <div class="input_cvv2 relative flex gap-4">
                  <font-awesome-icon
                    icon="fas fa-keyboard"
                    class="text-xl absolute bottom-2/3 translate-y-[50%] left-4"
                  />
                  <Field
                    name="pin2"
                    type="text"
                    placeholder="رمز دوم"
                    class="pin2_input relative w-2/3 h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                  <div
                    class="dynamic_password_req w-1/3 flex items-start justify-center flex-col"
                  >
                    <button
                      class="w-full h-12 text-white rounded-2xl bg-primary"
                    >
                      دریافت رمز پویا
                    </button>
                  </div>
                </div>
                <ErrorMessage name="security_code"  />
                <div class="save_card_data  w-full bg-red-500"  >
                  <Field
                    v-slot="{ field }"
                    name="terms"
                    type="checkbox"
                    :value="state.saving.isSave"
                    :unchecked-value="false"
                  >
                    <label class="flex gap-3 mt-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="terms"
                        v-bind="field"
                        :value="state.saving.isSave"
                        class="hidden"
                      />
                  <div class="thick_img cursor-pointer overflow-hidden" @click="toggle_save_mode" >
                        <img  :src="state.saving.isSave ? thick_img : no_thick_img " alt="" class="w-7 rounded-lg">
                        <!-- {{ state.saving.isSave }} -->
                      </div>
                      شماره کارت در درگاه‌های سِپ ذخیره شود
                    </label>
                  </Field>

                  <!-- <button @click="toggle_save_mode">Togg</button> -->
                </div>

                <div class="flex items-center justify-center flex-col gap-3">
                  <button class="w-full bg-primary_green_color h-12 rounded-xl text-white">
                    پرداخت
                      {{ 
                      convertNumbersToPersian(formatNumberWithSeparator(price))
                       }}
                       ريال
                  </button>
                  <button class="w-full bg-white border-2 border-gray-500 h-12 rounded-xl text-primary_danger_color">انصراف</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div
        class="payment__side overflow-hidden shadow-sm bg-white shadow-black relative h-full duration-300 md:min-h-[80vh] w-[100%] md:w-1/3 rounded-xl"
      >
        <button
          @click="more_info"
          class="more text-sm md:hidden absolute text-light_gray bg-input_form_bg rounded-xl py-3 px-6 z-40 bottom-3 left-4 cursor-pointer select-none"
        >
          {{ more ? "کمتر" : "بیشتر" }}
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
            <div class="beneficiary px-2 flex flex-col gap-6">
              <div class="merchent_store flex items-center gap-4 relative">
                <div
                  class="icon_store text-primary_payment_icons absolute top-1/2 translate-y-[-50%]"
                >
                  <font-awesome-icon icon="fa-solid fa-store" class="text-xl" />
                </div>
                <div class="store_name flex flex-col gap-2 pr-10">
                  <span class="text-light_gray text-base">پذیرنده</span>
                  <h3
                    class="text-black_gray_text text-2xl font-semibold leading-4"
                  >
                    طـاقـچـه
                  </h3>
                </div>
              </div>

              <div class="merchent_store flex items-center gap-4 relative">
                <div
                  class="icon_store text-primary_payment_icons absolute top-1/2 translate-y-[-50%]"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-money-bill"
                    class="text-xl"
                  />
                </div>
                <div class="store_name flex flex-col pr-10">
                  <span class="text-light_gray text-base">مبلغ</span>
                  <h3 class="text-black_gray_text text-2xl">
                    {{
                      convertNumbersToPersian(formatNumberWithSeparator(price))
                    }}
                    ریال
                  </h3>
                  <span class="text-light_gray text-sm"
                    >چهل و هشت هزار تومان</span
                  >
                </div>
              </div>
            </div>
            <div
              :class="more ? 'h-40 lg:h-0' : 'overflow-hidden'"
              class="merchent_info duration-300 flex flex-col gap-6 mt-8 h-0 md:h-full relative"
            >
              <div class="terminal_id flex items-center gap-2 relative">
                <div
                  class="icon_store text-primary_payment_icons absolute top-1/2 translate-y-[-50%]"
                >
                  <font-awesome-icon icon="fa-solid fa-id-card" />
                </div>
                <div class="store_name flex flex-col pr-10">
                  <span class="text-light_gray text-sm"
                    >شماره پذیرنده / ترمینال</span
                  >
                  <h3 class="text-black_gray_text text-lg">
                    {{ convertNumbersToPersian("14792369 / 13679208 ") }}
                  </h3>
                </div>
              </div>
              <div class="merchant_website flex items-center gap-2 relative">
                <div
                  class="icon_store text-primary_payment_icons absolute top-1/2 translate-y-[-50%]"
                >
                  <font-awesome-icon icon="fa-solid fa-id-card" />
                </div>
                <div class="store_name flex flex-col pr-10">
                  <span class="text-light_gray text-sm">سایت پذیرنده</span>
                  <h3 class="text-black_gray_text text-lg font-semibold">
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
