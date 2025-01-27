<script setup>
import { ref, reactive , onMounted } from "vue";
import { numberToPersian, digitsToWords, wordsToPersian } from "persian-tools";
import thick_img from "../../../assets/images/thick.png";
import no_thick_img from "../../../assets/images/no_thick.png";
import { Icon } from "@iconify/vue";

const currentWidth = ref(window.innerWidth);
const specialCondition = ref(false);

const updateWidth = () => {
  currentWidth.value = window.innerWidth;

  // Perform special logic when a certain width is crossed
  if (currentWidth.value < 768) {
    specialCondition.value = true; // Example: Small screen logic
    console.log('Width is below 768px, special condition activated');
  } else {
    specialCondition.value = false; // Reset for larger screens
    console.log('Width is 768px or above');
  }
};





const more = ref(false);
const state = reactive({
  toggle: {
    isSave: false,
    report_payment: false,
    pin2_guide_toggle:false,
    guide_security_toggle:false
  },
});
const toggle_save_mode = () => {
  state.toggle.isSave = !state.toggle.isSave;
};
const toggle_pin2_guide = ()=>{
  state.toggle.pin2_guide_toggle = !state.toggle.pin2_guide_toggle;
}
const toggle_guide_security = ()=>{
  state.toggle.guide_security_toggle = !state.toggle.guide_security_toggle;
}


const toggle_payment_report = () => {
  state.toggle.report_payment = !state.toggle.report_payment;
};

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
// ۰۲۱-۸۴۰۸۰
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

const count_down_end = ref(false);
const handle_countdown_finish = () => {
  count_down_end.value = true;
};

const saved_cards_status = ref(false)
const show_saved_cards = ()=>{
  saved_cards_status.value = true
}
const hide_saved_cards = ()=>{
  saved_cards_status.value = false
}

onMounted(()=>{
  window.addEventListener('resize', updateWidth);

})
</script>
<template>
  <!-- Payment -->
  <div class="payment flex flex-col gap-4 bg-light_bg   min-h-[100vh]" :class="{'min-h-[70vh] py-0' : count_down_end}">

    <div class="payment__header relative before:!h-28 before:md:!h-28 before:lg:!h-16 ">
      <!-- title in small devices  -->
      <div
        class="header_mobile_title text-right py-5 px-4 lg:hidden  text-white text-[14.5px]"
      >
        <h3 class="md:invisible lg:hidden">درگاه پرداخت اینترنتی سِپ</h3>
      </div>
      <!-- max-w-[1072px]
            header_main px-4 duration-300  bg-white rounded-xl container 
                  md:container flex items-center justify-between shadow-sm shadow-black -->
      <div
        class=" header_main bg-white rounded-xl duration-300 
        lg:mt-6 flex items-center justify-between px-5 py-3 md:container !mx-auto !w-[95%] md:!w-[90%] md:!max-w-[1072px]"
      >
        <div class="main_logo_payment ">
          <img
            src="../../../assets/images/sepone.png"
            title="sep"
            class="w-[5.2rem] lg:w-[6.7rem]"
          />
          <!-- class="md:w-[98px] md:h-[89px] w-[88px] lg:w-3/4 lg:h-full  py-2" -->

        </div>
        <div class="center_header_payment">
          <vue-countdown
            :interval="10"
            :time="1000 * 6"
            v-slot="{ minutes, seconds }"
            class="text-sm"
            :class="{ 'text-primary_danger_color': minutes <= 3 ,
            
            '!text-primary' : minutes == 0 && seconds == 0 }"
            @end="handle_countdown_finish"
          >
            <div
              class="purchase_timer text-xs md:hidden flex items-center justify-between gap-3 px-2 rounded-md py-2 bg-lighter_bg text-primary"
              :class="{ 'bg-primary_bg_danger_color': minutes <= 3,
              '!bg-light_bg' : minutes == 0 && seconds == 0
               }"
            >
              <h2 :class="{ 'text-primary_danger_color': minutes <= 3 ,
                            '!text-primary' : minutes == 0 && seconds == 0
                                }">
                زمان باقی مانده :
              </h2>

              <p class="text-lg" :class="{ 'text-primary_danger_color': minutes <= 3 ,
              '!text-primary' : minutes == 0 && seconds == 0
               }">
                {{ convertNumbersToPersian(formatTime(seconds)) }} :
                {{ convertNumbersToPersian(formatTime(minutes)) }}
              </p>
            </div>
          </vue-countdown>
          <div class="header_title hidden md:block text-[18px] text-black">
            <h1>درگاه پرداخت اینترنتی سِپ</h1>
          </div>
        </div>

        <div class="sep_logo bg-red-500">
          <div class="main_logo_payment">
            <img
              src="../../../assets/images/Web-design-Shaprak.png"
              alt="Shapark Logo"
              title="شاپرک"
              class="w-[3.2rem] lg:w-[4.3rem]"
            />
              <!-- class="md:w-[66px] md:h-[42px] w-[54px] py-2 " -->
          </div>
        </div>
      </div>
    </div>

    <!-- end of session -->
  <div class="session_end_container min-h-[49vh]"
  v-if="count_down_end"
  >
    <div
      class="bg-white rounded-xl  md:!max-w-[1072px]  md:container
       !mx-auto !w-[95%] md:!w-[90%] p-4 "
    >
      <div
        class="content text-center flex-col gap-8  rounded-xl border-[1px] 
         border-primary_danger_color flex items-center justify-center pt-2"
      >
        <div class="flex flex-col items-center ">
          <div class="text-center  rounded-full py-4">
            <img src="../../../assets/images/error-icon-4.png" 
            alt="" class="w-10 opacity-80 hover:opacity-100 duration-300 ">
            <!-- <Icon icon="iconoir:" width="24" height="24" /> -->
          </div>
          <h2 class="text-2xl">خطا در تراکنش</h2>
          <!-- Creative -->
          <h3 class="text-xl mt-2">SessionIsNull (SessionIsNull)</h3>
        </div>
        <!-- err info -->
        <div dir="rtl" class="error_info text-primary_danger_color pb-4 pt-0 px-3">
          <p class="text-lg">
            در صورت کسر وجه از حساب شما، مبلغ مذکور طی {{ convertNumbersToPersian('72') }} ساعت به حساب شما عودت
            خواهد شد.
          </p>
        </div>
      </div>
    </div>
    <div
    v-if="count_down_end"
     dir="rtl" class="container mt-4 rounded-xl p-3 !mx-auto bg-white text-black_gray_text md:!max-w-[1072px]">
      <h3 class="mb-2">توجه</h3>
      <p class="mb-2 text-base ">
        در صورتی که طی 30 دقیقه، فروشنده تایید تحویل کالا یا خدمت را به شرکت سِپ اطلاع رسانی نکند، مبلغ کسر شده طی {{ convertNumbersToPersian('72') }} ساعت به حساب شما برگشت داده می‌شود.
      </p>
    </div>
  </div>

    <div
      v-if="!count_down_end"
      class="payment_body md:container !mx-auto !w-[95%] md:!w-[90%] md:!max-w-[1072px] rounded-lg duration-300 !px-0 flex items-stretch gap-4 md:flex-row flex-col-reverse"
    >
      <div
        class="payment__main payment_cards_border p-4 bg-white md:min-h-[80vh] w-[100%] md:w-2/3 rounded-lg"
      >
        <div
          class="title_payment_main mb-4 hidden md:block text-primary bg-lighter_bg p-4 rounded-lg"
        >
          <h2 class="text-[14px] mx-4 font-semibold ">اطلاعات کارت خود را وارد کنید</h2>
        </div>
        <!-- Payment form -->
        <div class="min-h-[70vh] md:mx-auto md:container flex flex-col ">
          <div class="form  md:!mx-6 lg:!mx-20">
            <Form
              class="flex items-center justify-center flex-col gap-2"
              @submit.prevent=""
            >
              <div class="card_number flex flex-col w-full">
                <label for="card_number" class="mb-1">شماره کارت</label>
                <div class="input_card_number relative">
                  <Icon @click="show_saved_cards" icon="ic:baseline-credit-card" width="32" height="32" 
                  class="cursor-pointer  text-xl absolute  bottom-1/2 translate-y-[50%] left-4 z-[99] text-primary_icon_light"
                   />
                   <div
                   :class="{'h-[14.5rem]' : saved_cards_status}"
                    class="cards_panel  absolute top-[100%] rounded-lg z-[999] left-0 w-full h-0 duration-300 overflow-hidden bg-red-500">
                    <div dir="ltr" class="cards_field rounded-t-xl bg-white mb-2 h-[10rem] overflow-scroll overflow-x-hidden  border-black">
                      <!-- v-for -->
                    <!-- @blur="hide_saved_cards" -->
                      <div
                       
                       class="card_number cursor-pointer last:border-b-0 border-b-2 flex items-center justify-between px-4 py-3" 
                       v-for="(item,index) in 4" :key="index" dir="rtl">
                        <p>سپه</p>
                        <p dir="ltr">5892 10•• •••• 2788</p>
                        <img src="../../../assets/images/sepah.svg" alt="">
                      </div>
                    </div>
                    <div class="action_buttons_panel text-primary ">
                      <button></button>
                    </div>
                   </div>
                    <!-- @blur="hide_saved_cards" -->
                  <Field
                    name="card_number"
                    @focus="show_saved_cards"
                    type="text"
                    placeholder=" _ _ _ _   _ _ _ _  _ _ _ _    _ _ _ _"
                    maxlength="19"
                    minlength="16"
                    class="filed_input card_number_input relative w-full h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
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
                  <div class="cvv2_icon">
                    <Icon icon="ic:baseline-keyboard" width="32" height="32" 
                  class="cursor-pointer  text-xl absolute bottom-1/2 translate-y-[50%] left-4 z-[99] text-primary_icon_light"
                   />
                  </div>
                  <!-- <font-awesome-icon
                    icon="fas fa-keyboard"
                    class="text-xl absolute bottom-1/2 translate-y-[50%] left-4"
                  /> -->
                  <Field
                    name="cvv2"
                    type="password"
                    placeholder="CVV2"
                    maxlength="9"
                    minlength="5"
                    class="filed_input cvv2_input relative w-full h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
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
                    class="filed_input exp_month_input relative w-1/2 h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                  <Field
                    name="exp_year"
                    type="text"
                    placeholder="سال"
                    class="filed_input exp_year_input relative w-1/2 h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                </div>
                <ErrorMessage name="exp_month" />
                <ErrorMessage name="exp_year" />
              </div>
              <div class="security_code flex flex-col w-full mb-1 ">
                <h2 class="text-right w-full mb-2">کد امنیتی</h2>
                <div class="input_cvv2 relative flex gap-4">
                  <!-- <div class="security_code_icon">
                    
                  </div> -->
                  <div class="secrurity__input relative flex-1 lg:w-2/3">
                    <Field
                    name="security_code"
                    type="text"
                    placeholder="کد امنیتی"
                    class="filed_input security_code_input relative 
                    w-full h-[3rem] p-3 rounded-xl bg-input_form_bg
                    border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                  <Icon icon="ic:baseline-change-circle" width="32" height="32" 
                  class="text-xl absolute bottom-1/2 translate-y-[5%] md:translate-y-[10%] left-3 z-[99] text-primary_icon_light cursor-pointer hover:rotate-180 duration-500"
                   />
                  </div>

                  <div
                    class="security_img flex items-start justify-center flex-col"
                  >
                    <img
                      src="./../../../assets/images/captcha.jpg"
                      alt=""
                      class="max-w-[133px] h-[48px] lg:max-w-[146px] lg:max-h-[68px] rounded-lg"
                    />
                    <div class="play_security_code flex w-full justify-center  items-center gap-1">
                      <div class="playsound pt-1">
                        <Icon icon="ic:baseline-volume-up" width="20" height="20" class=" cursor-pointer  text-primary_icon" />
                      </div>
                      <p class="text-sm">پخش صوتی</p>
                    </div>
                  </div>
                </div>
                <ErrorMessage name="security_code" />
              </div>

              <div class="pin2 flex flex-col w-full">
                <h2 class="text-right w-full mb-2">رمز دوم</h2>
                <div class="input_cvv2 relative flex gap-4">


                  <div class="pin2_input relative w-2/3">
                    <div class="pin2_icon cursor-pointer" >
                    <Icon icon="ic:baseline-keyboard" width="32" height="32" 
                  class="text-xl absolute bottom-1/2 translate-y-[50%] left-4 z-[99] text-primary_icon_light"
                   />
                  </div>
                    <Field
                    name="pin2"
                    type="password"
                    placeholder="رمز دوم"
                    class="filed_input pin2_input relative w-full h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                    :rules="passwordRules"
                  />
                  </div>
                  <div
                    class="dynamic_password_req w-1/3 flex items-start justify-center flex-col"
                  >
                    <button
                      class="w-full h-12 text-white rounded-2xl bg-primary hover:opacity-80"
                    >
                      دریافت رمز پویا
                    </button>
                  </div>
                </div>
                <ErrorMessage name="security_code" />
                <div class="save_card_data w-full my-2 ">
                  <Field
                    v-slot="{ field }"
                    name="terms"
                    type="checkbox"
                    :value="state.toggle.isSave"
                    :unchecked-value="false"
                  >
                    <label class="flex gap-3 mt-3 mb-1 cursor-pointer">
                      <input
                        type="checkbox"
                        name="terms"
                        v-bind="field"
                        :value="state.toggle.isSave"
                        class="hidden"
                      />
                      <div
                        class="thick_img cursor-pointer overflow-hidden"
                        @click="toggle_save_mode"
                      >
                        <img
                          :src="state.toggle.isSave ? thick_img : no_thick_img"
                          alt=""
                          class="w-7 rounded-lg"
                        />
                        <!-- {{ state.saving.isSave }} -->
                      </div>
                      شماره کارت در درگاه‌های سِپ ذخیره شود
                    </label>
                  </Field>

                  <!-- <button @click="toggle_save_mode">Togg</button> -->
                </div>
                <!-- Action Buttons -->
                <div
                  class="flex items-center justify-center flex-col my-2 gap-3"
                >
                  <button
                    class="w-full bg-primary_green_color hover:opacity-80 h-12 rounded-xl text-white"
                  >
                    پرداخت
                    {{
                      convertNumbersToPersian(formatNumberWithSeparator(price))
                    }}
                    ريال
                  </button>
                  <button
                    class="w-full bg-white border-2 hover:opacity-80 border-[#f2f3f7] h-12 rounded-xl text-primary_danger_color"
                  >
                    انصراف
                  </button>
                </div>
                <div
                  :class="{
                    'h-0 opacity-0 hidden': state.toggle.report_payment == true,
                  }"
                  class="payment_report duration-300 flex items-start my-2 gap-3"
                >
                  <div
                    class="payment_report_icon cursor-pointer overflow-hidden"
                    @click="toggle_payment_report"
                  >
                    <img
                      src="../../../assets/images/plus_icon.png"
                      alt=""
                      class="w-7 rounded-lg"
                    />
                  </div>
                  <div class="flex items-start flex-col gap-1 cursor-pointer" @click="toggle_payment_report">
                    <p>
                      مایلید اطلاعات پرداخت را به صورت ایمیل و پیامک دریافت
                      کنید؟
                    </p>
                    <span>(اختیاری)</span>
                  </div>
                </div>
                <div
                  :class="{
                    'h-52 opacity-100': state.toggle.report_payment == true,
                  }"
                  class="flex items-center flex-col mt-3 h-0 opacity-0 duration-500 delay-100"
                >
                  <h2 class="text-right w-full">
                    شماره موبایل و ایمیل خود را وارد کنید (اختیاری)
                  </h2>
                  <div class="payment_reports gap-4 flex-col w-full flex">
                    <div class="payment_report_inputs w-full">
                      <div class="email_report">
                        <h3 class="mb-1">ایمیل</h3>
                        <div class="email w-full">
                          <Field
                            name="email"
                            type="email"
                            placeholder="mail@domain.com"
                            class="filed_input email_input relative w-full h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                            :rules="passwordRules"
                          />
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </div>
                    <div class="payment_report_inputs w-full">
                      <div class="phone_number_report">
                        <h3 class="mb-1">شماره همراه</h3>
                        <div class="phone_number w-full">
                          <Field
                            name="phone_number"
                            type="text"
                            placeholder="_ _  _ _ _  _ _ _ _ 09"
                            class="filed_input phone_number_input relative w-full h-[3rem] p-3 rounded-xl bg-input_form_bg border-none outline-none text-center"
                            :rules="passwordRules"
                          />
                          <ErrorMessage name="phone_number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div
        class="payment__side payment_cards_border overflow-hidden  bg-white  relative duration-300 md:min-h-[80vh] w-[100%] md:w-1/3 rounded-xl"
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
            :time="1000 * 6.5"
            v-slot="{ minutes, seconds }"
            @end="handle_countdown_finish"
            :class="{ 'text-primary_danger_color': minutes <= 3 ,
            '!text-primary' : minutes == 0 && seconds == 0 }"
          >
            <div
              class="purchase_timer text-base hidden md:flex items-center justify-between gap-3 rounded-lg p-4 mb-12 bg-light_bg text-primary"
              :class="{ 'bg-primary_bg_danger_color': minutes <= 3 , '!bg-light_bg' : minutes == 0 && seconds == 0 }"
            >
            <h2
            :class="{
            'text-primary_danger_color': minutes <= 3,
            '!text-primary': minutes === 0 && seconds === 0
  }"
                              >
              زمان باقی مانده :
              </h2>
              <p
                class="text-base"
                :class="{ 'text-primary_danger_color': minutes <= 3 ,
                '!text-primary': minutes === 0 && seconds === 0
                }"
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
              :class="[more && currentWidth <= 768 ? 'h-40 lg:h-0 ' : 'overflow-hidden' , currentWidth > 768 ? '!overflow-visible' : '']"
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
     <!-- Guide dynamic pin -->
  <!-- my-8 check -->
  <div
    v-if="!count_down_end"
    :class="{'h-[33rem]' : state.toggle.pin2_guide_toggle }"
    class="guide_dynamic_pin   md:container  !w-[95%] md:!w-[90%]
      duration-300 !px-0  rounded-lg my-8 text-right flex flex-col p-4 
       md:!max-w-[1072px] container mx-auto bg-white h-20 md:h-full overflow-hidden"
       dir="ltr"
  >
    <div class="title_guide_dynamic payment_cards_border  text-primary bg-lighter_bg p-4 mx-4 rounded-lg relative">
      <h2 class="text-sm mx-4">راهنمای استفاده از رمز پویا</h2>
      <Icon icon="ic:baseline-keyboard-arrow-down" width="24" height="24"
      :class="{'rotate-180' : state.toggle.pin2_guide_toggle}"
       class="md:hidden absolute left-0 bottom-0 mx-4 duration-300 translate-y-[-50%] cursor-pointer" @click="toggle_pin2_guide" />
    </div>
    <!-- description of dynamic pin -->
    <div class="description p-4 ">
      <h3>
        .رمز پویا رمز یک‌بار مصرفی است که به جای رمز دوم کارت استفاده می‌شود
      </h3>
      <p>
        .مرحله اول: بر اساس دستورالعمل بانک صادرکننده کارت خود، نسبت به فعال
        سازی رمز پویا اقدام نمایید
      </p>
      <p>
        .مرحله دوم: رمز پویا را بر اساس روش اعلامی از طرف بانک صادر کننده کارت،
        به یکی از روش‌های زیر دریافت کنید
      </p>
      <div class="step_2_steps flex items-end flex-col gap-2 px-8 py-2">
        <div class="sub_step_1 w-full flex items-end justify-end gap-2">
          .دریافت از طریق برنامه کاربردی بانک، اینترنت بانک و یا موبایل بانک
          <span> - ۱</span>
        </div>
        <div class="sub_step_2 w-full flex items-end justify-end gap-2">
          .دریافت از طریق کد USSD بانک صادر کننده کارت شما
          <span> - ۲</span>
        </div>
        <div class="sub_step_3 w-full flex items-end justify-end gap-3">
          .دریافت از طریق کد USSD بانک صادر کننده کارت شما
          <span> - ۳</span>
        </div>
        <p>
          .مرحله سوم: پس از دریافت رمز به یکی از روش‌های فوق، رمز پویای دریافت
          شده را در محل تعیین شده برای "رمز دوم" وارد نمایید و سپس مابقی اطلاعات
          را تکمیل نمایید
        </p>
      </div>
    </div>
  </div>
  <!-- Guide security -->
  <div
  v-if="!count_down_end"
  :class="{'h-[56rem]' : state.toggle.guide_security_toggle }" 
  class="security_guide payment_cards_border h-20 md:h-full overflow-hidden  !w-[95%] md:!w-[90%]  duration-300 !px-0 text-right flex rounded-lg flex-col p-4  md:!max-w-[1072px] container mx-auto bg-white"
  dir="ltr"

  >
    <div class="title_security_guide mx-4 text-primary bg-lighter_bg p-4 rounded-lg relative">
      <h2 class="text-sm mx-4">راهنما و نکات امنیتی</h2>
      <Icon 
      :class="{'rotate-180' : state.toggle.guide_security_toggle}" @click="toggle_guide_security"
      icon="ic:baseline-keyboard-arrow-down" width="24" height="24" class="cursor-pointer duration-300 md:hidden absolute left-0 bottom-0 mx-4 translate-y-[-50%]" />

    </div>
    <!-- description of security guide -->
    <div  class="description flex flex-col gap-2 p-4">
      <h3 class="flex w-full items-end justify-end gap-1">
        <p>.۱۶ رقمی بوده و بصورت ۴ قسمت ۴ رقمی روی کارت درج شده است</p>
        <span class="bold"> : شماره کارت </span>
      </h3>

      <h3 class="flex w-full items-end justify-end gap-1">
        <p>
          .شماره شناسایی کارت با طول ۳ یا ۴ رقم کنار شماره کارت و یا پشت کارت
          درج شده است
        </p>
        <span class="bold"> : شماره شناسایی دوم (CVV2) </span>
      </h3>

      <h3 class="flex w-full items-end justify-end gap-1">
        <p>.شامل دو بخش ماه و سال انقضا در کنار شماره کارت درج شده است</p>
        <span class="bold"> : تاریخ انقضا </span>
      </h3>

      <h3 dir="rtl" class="text-right">
        <span class="bold"> رمز دوم : </span>
        <span>
          با عنوان رمز دوم و در برخی موارد با PIN2 شناخته می‌شود، از طریق بانک
          صادر کننده کارت تولید شده و همچنین از طریق دستگاه‌های خودپرداز بانک
          صادر کننده قابل تهیه و یا تغییر می‌باشد.
        </span>
      </h3>
      <h3 dir="rtl" class="text-right">
        <span class="bold"> کد امنیتی : </span>
        <span>
          بخشی از محتوای صفحه پرداخت است و لازم است برای ادامه فرآیند خرید، کد
          موجود که به صورت عددی در تصویر مشخص شده است در محل پیش بینی شده درج
          شود.
        </span>
      </h3>

      <div dir="rtl" class="mt-3 about_us">
        <p>
          درگاه پرداخت اینترنتی سامان با استفاده از پروتکل امن SSL به مشتریان
          خود ارائه خدمت نموده و با آدرس
          <a href="https://sep.shaparak.ir" class="text-primary_danger_color">
            <span>https://sep.shaparak.ir</span>
          </a>
          شروع می‌شود. خواهشمند است به منظور جلوگیری از سوء استفاده‌های احتمالی
          پیش از ورود هرگونه اطلاعات، آدرس موجود در بخش مرورگر وب خود را با آدرس
          فوق مقایسه نمایید و در صورت مشاهده هر نوع مغایرت احتمالی، موضوع را با
          ما در میان بگذارید.
        </p>
      </div>
      <p>از صحت نام فروشنده و مبلغ نمایش داده شده، اطمینان حاصل فرمایید.</p>

      <p>
        برای جلوگیری از افشای رمز کارت خود، حتی المقدور از صفحه کلید مجازی
        استفاده فرمایید.
      </p>

      <p>
        برای کسب اطلاعات بیشتر، گزارش فروشگاه‌های مشکوک و همچنین اطلاع از وضعیت
        پذیرندگان اینترنتی می‌توانید با شماره
        <a href="tel:+982184080" aria-label="Call 021-84080" class="px-1"
          ><span class="text-primary">۸۴۰۸۰-۰۲۱</span></a
        >
        تماس بگیرید و یا از طریق آدرس ایمیل
        <a dir="rtl" href="mailto:joebloggs@gmail.com" class="px-1"
          ><span class="text-primary"> epay@sep.ir </span></a
        >
        اقدام نمایید
      </p>
    </div>
  </div>
 
   <!-- Footer -->
   <footer>
    <div
      class="footer_container text-white bg-primary w-full pt-1 mt-12 flex flex-col gap-8 items-center justify-center text-center pb-4"
    >
      <div class="payment_company flex flex-col">
        <div class="payment_company_logo flex items-center justify-center">
          <img src="../../../assets/images/sep.png" class="w-56" />
        </div>
        <div class="company_desc text-white">
          <p>شرکت پرداخت الکترونیک سامان (سهامی عام)</p>
          <p class="py-2">۲۰۰۸ - ۲۰۲۵</p>
        </div>
      </div>
      <!-- copyright and contact us -->
      <div class="text-sm md:text-base px-4 md:px-0" >
        <p dir="rtl" class="mb-3">
          تمامی حقوق این محصول متعلق به سِپ (پرداخت الکترونیک سامان کیش)
          می‌باشد.
        </p>

        <p>
          <span> مرکز شبانه روزی ارتباط با مشتریان: </span>
          <a href="tel:+982184080" aria-label="Call 021-84080" class="px-1"
            ><span class="">۸۴۰۸۰-۰۲۱</span></a
          >
        </p>
      </div>
    </div>
  </footer>
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
