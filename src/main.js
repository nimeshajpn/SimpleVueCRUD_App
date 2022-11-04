import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'







import"../node_modules/bootstrap/dist/css/bootstrap.css"
import "./style.css" ;
import"../node_modules/@fortawesome/free-solid-svg-icons"



createApp(App).use(store).use(router).mount('#app')
