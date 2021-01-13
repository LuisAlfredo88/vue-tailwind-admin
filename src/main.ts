import Vue from 'vue'
import { createApp, Component } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
//import Notifications from "vt-notifications";

import BreadcrumbTool from '@/components/utils/BreadcrumbTool.vue'

createApp(App)
    .use(router)
    .use(store)
    .component('breadcrumb', BreadcrumbTool)
    .mount('#app')
