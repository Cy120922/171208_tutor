// 入口js

import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

// requestAnimationFrame('./pages/Msite/css/Msite.css')

new Vue({
    el:'#app',
    render: h => h(App),
    router,  //使用vue-rovue-routeruter
    // store,  //使用Vuex
})