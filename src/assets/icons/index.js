import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue' 
Vue.component('svg-icon',SvgIcon)

// 定义一个加载目录的函数
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)

// 加载目录下的所有 svg 文件
requireAll(req)
