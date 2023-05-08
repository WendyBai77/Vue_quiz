import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vue Axios套件
import axios from 'axios'
import VueAxios from 'vue-axios'

// 匯入自定義scss
import "./assets/scss/all.scss";

// 匯入Bootstrap JS
import "bootstrap";

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 全域設定顏色、主題
app.config.globalProperties.color = '#DFE4EB'
app.config.globalProperties.theme = 'dark'

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
