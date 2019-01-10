<template>
  <div class="Login-wrap">
    <div class="phoneLogin-Wrapper">
      <div class="logo">
        <img src="../../common/images/loading.gif" alt="图片加载失败">
      </div>
      <input type="text" placeholder="请输入手机号" class="account" v-model="phone">
      <div class="password-wrapper">
        <input :disabled="!isRightPhone ||computeTime>0"  type="text" placeholder="请输入短信验证码" class="password" :class="{right_phone_number: isRightPhone}" @click.prevent="sendCode">
        <div class="getCode">{{computeTime>0?`已发送(${computeTime}s)` :'获取验证码'}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    data (){
      return{
        phone:'',
        computeTime:0,
      }
    },
    computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      sendCode(){
        //最大定时时间
        this.computeTime=30
        //启动循环定时器
        const intervalId =setInterval(() =>{
          this.computeTime--
          if(this.computeTime<=0){
            clearInterval(intervalId)
          }
        },1000)

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Login-wrap{
    height 1000px
    text-align center
    .phoneLogin-Wrapper{
      width 100%
      text-align center
      box-sizing border-box
      .logo{
        padding-top: 0.74667rem;
        margin-bottom: 1.8rem;
        .img{
          width: 150px
          height: 150px
        }
        }
      .account{
        width: 306px
        height 40px
        font-size 16px
        line-height 20px
        border-bottom 1px solid red
        margin-top 8px
        padding-left 0
      }
      .password-wrapper{
        position relative
        left 0
        top 0
        font-size 16px
        border-bottom 1px solid red
        .password{
          width: 100%;
          height: 29px;
          font-size: 16px;
          line-height: 8px;
          padding-left: 33px;
          -webkit-tap-highlight-color: transparent;
          outline: none;
          &.right_phone_number{
            color black
          }
        }
        .getCode{
          position: absolute;
          right: 0;
          top: 5px;
          font-size: 3px;
          width: 50px;
          height: 19px;
          text-align: center;
          color: #941c1c;
          background: #fff;
          line-height: 20px;
          border: 1px solid #1f1e1e;
          border-radius: 3px;
        }
      }
    }
  }

</style>
