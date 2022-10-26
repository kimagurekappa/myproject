import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AxiosPlugin from '../plugins/axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(VueAxios, axios)
              .use(AxiosPlugin)
              .use(ElementPlus)
              .mount('#app')
              