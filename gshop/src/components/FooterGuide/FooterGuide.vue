<template>
  <footer class="footer border-1px" >
    <nav>
      <a href="javascript:;" class="item" @click="goto('/msite')" :class="{active: isCurrent('/msite')}">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/knowledge')" :class="{active: isCurrent('/knowledge')}">
        <i class="iconfont icon-shiwu"></i>
        <span>识物</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/sort')" :class="{active: isCurrent('/sort')}">
        <i class="iconfont icon-shuangsechangyongtubiao-"></i>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/shopcart')" :class="{active: isCurrent('/shopcart')}">
        <i class="iconfont icon-gouwuche-"></i>
        <span>购物车</span>
      </a>
      <a href="javascript:;" class="item" @click="goto('/profile')" :class="{active: isCurrent('/profile')}">
        <i class="iconfont icon-my"></i>
        <span>个人</span>
      </a>
    </nav>
  </footer>
</template>

<script>
  export default{
    methods: {
      goto (path) {
        this.$router.replace(path)
      },
      isCurrent (path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import "../../common/stylus/mixins.styl"
 .footer
   position fixed
   z-index 5
   left 0
   right 0
   bottom 0
   height px2rem(100)
   background-color #fafafa
   border-top 1px solid #d9d9d9
   nav
     display flex
     flex-direction row
     justify-content space-around
     font-size px2rem(24)
     .item
       position relative
       text-align center
       color #666666
       i
         display block
         font-size 30px
         padding-top 2px
         color deeppink
       span
         display block
         margin-top px2rem(10)
         font-family: cursive;
       &.active
         color $msite
</style>
