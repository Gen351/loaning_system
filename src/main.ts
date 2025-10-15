// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css' // <-- this line is CRUCIAL for Tailwind

createApp(App).use(router).mount('#app')
