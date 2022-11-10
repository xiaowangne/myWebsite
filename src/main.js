import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'  
import Axios from './plugnis/axios.js'
// css动画
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'
import 'lib-flexible'
const app=createApp(App);
app.config.globalProperties.$serverUrl = 'http://101.34.26.168'

app.use(router).use(Axios).use(VueAnimXyz).mount('#app')
