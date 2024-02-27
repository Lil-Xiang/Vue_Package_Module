import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import vue3TreeOrg from 'vue3-tree-org';
import "vue3-tree-org/lib/vue3-tree-org.css";

import VueApexCharts from "vue3-apexcharts";

import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3TreeOrg)
app.use(VueApexCharts);
app.use(Vue3FormWizard);

app.mount('#app')
