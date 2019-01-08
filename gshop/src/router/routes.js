import Msite from '../pages/MSite/MSite.vue'
import KnowLedge from '../pages/KnowLedge/KnowLedge.vue'
import Sort from '../pages/Sort/Sort.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from  '../pages/Profile/Profile.vue'
import  Login from '../pages/Login/Login.vue'

export default [
  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/knowledge',
    component:KnowLedge
  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/msite'
  }
]
