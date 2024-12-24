import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import './assets/main.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStore , faMoneyBill , faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// آیکون‌ها را به کتابخانه اضافه کن
library.add(faStore,faMoneyBill,faIdCard);

// ساخت اپلیکیشن Vue
const app = createApp(App);

// ثبت کامپوننت Font Awesome به صورت global
app.component('font-awesome-icon', FontAwesomeIcon);

// مانت کردن اپ روی المان HTML
app.mount('#app');
