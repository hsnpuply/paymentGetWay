/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      container:{
        center:true,
        padding:'2rem'
      },
      colors: {
        primary: '#2b73e3',
        primary_icon:'#2e74e5',
        primary_icon_light:'#2f77eb',
        primary_green_color:'#00c291',
        primary_danger_color:'#f63a53',
        primary_payment_icons:'#bfc6d6',
        light_bg:'#f7f7fc',
        input_form_bg:'#f9fafc',
        black_gray_text:'#2d3a4a',
        light_gray:'#919aaf',
        border_color:'#f2f3f7',
        lighter_bg:'#eef4fd',

        // secondary: '#f1c40f',
        // dark_primary: '#122',
        // dark_secondary: '#333',

      }
    },
  },
  plugins: [],
}

