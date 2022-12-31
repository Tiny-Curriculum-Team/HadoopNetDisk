 import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Register from '../views/user/register.vue'  //引入根目录下的Hello.vue组件
import Login from '../views/user/login.vue'
// import Homepage from '../components/Left_nav.vue'
import AllFile from '../components/configuration/AllFile.vue'
import ClassFy from '../components/configuration/ClassiFy.vue'
import MyShare from '../components/configuration/MyShare.vue'
import Transmit from '../components/configuration/Transmit.vue'
import BaseInfor from '../components/configuration/BaseInfor.vue'
import UserManagement from '../components/configuration/user-manage.vue'
import index from '../views/index.vue'
 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Login',     //路由名称，
      component: Login  //对应的组件模板
    },
    {
        path:'/register',
        name: 'Register',
        component: Register
    },
    {
      path:'/index',
      name:'index',
      component:index,
      children:[
        {
          path:'/index/allfile',
          name:'AllFile',
          component:AllFile
        },
        { 
          path:'/index/classfy',
          name:'ClassFy',
          component:ClassFy
        },
        {
          path:'/index/myshare',
          name:'MyShare',
          component:MyShare
        },
        {
          path:'/index/transmit',
          name:'Transmit',
          component:Transmit
        },
        {
          path:'/index/baseInfo',
          name:'BaseInfor',
          component:BaseInfor
        },
        {
          path:'/index/user-management',
          name:'UserManagement',
          component:UserManagement
        },
      ] 
    },
    
    // {
    //   path:'/index',
    //   // name: 'Homepage',
    //   component: index,
    //   children:[
    //     {
    //       path:'/home/allfile',
    //       name:'AllFile',
    //       component:AllFile
    //     },
    //     { 
    //       path:'/home/classfy',
    //       name:'ClassFy',
    //       component:ClassFy
    //     },
    //     {
    //       path:'/home/myshare',
    //       name:'MyShare',
    //       component:MyShare
    //     },
    //     {
    //       path:'/home/transmit',
    //       name:'Transmit',
    //       component:Transmit
    //     },
    //     {
    //       path:'/home/baseInfo',
    //       name:'BaseInfor',
    //       component:BaseInfor
    //     },
    //     {
    //       path:'/home/user-management',
    //       name:'UserManagement',
    //       component:UserManagement
    //     },
    //   ] 
    // }
  ]
})