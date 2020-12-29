import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Reg from '@/views/Reg'
import Shoppingcar from '@/views/Shoppingcar'
import Goods from '@/views/Goods'

Vue.use(Router)

const routes = [{
  path:'/',
  redirect:'/index'
},{
  path:'/index',
  component:Index,
},{
  path:'/Login',
  component:Login,
},{
  path:'/Reg',
  component:Reg,
},{
  path:'/Shoppingcar',
  component:Shoppingcar,
},{
  path:'/Goods',
  component:Goods,
}
]

export default new Router({
  routes,
})
