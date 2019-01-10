import Msite from '../pages/MSite/MSite.vue'
import KnowLedge from '../pages/KnowLedge/KnowLedge.vue'
import Sort from '../pages/Sort/Sort.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from  '../pages/Profile/Profile.vue'
import  Login from '../pages/Login/Login.vue'

export default [
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShow:true
    }
  },
  {
    path:'/knowledge',
    component:KnowLedge,
    meta:{
      isShow:true
    }
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{
      isShow:true
    }
  },
  {
    path: '/sort',
    component: Sort,
    meta:{
      isShow:true
    }
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isShow:true
    }
  },
  {
    path:'/',
    redirect:'/msite'
  }
]
