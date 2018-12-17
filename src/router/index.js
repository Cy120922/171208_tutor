// 路由器对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件模块
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Release from '../pages/Release/Release.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
        {
            path:'/msite',    //path最左侧的/永远代表根路径
            component:Msite,
            meta:{         // meta:给路由添加属性showFooter
                showFooter:true
            }
        },
        {
            path:'/search',   
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/release',   
            component:Release,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',   
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {  //默认显示
            path:'/',
            redirect: '/msite'
        },
        {
            path:'/login',   
            component:Login
        },
        
    ]
})