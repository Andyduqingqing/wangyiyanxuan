<template>
  <div class="loginTypesWrap">
      <div class="m-loginTypes">
        <div class="cont">
          <div class="logoWrap">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="btnWrap" @click="$router.push('/login')">
            <div class="w-button" style="
    background-color: rebeccapurple;">
              <i class="iconfont icon-piaofang"></i>
              <span>手机号码登录</span>
            </div>
            <div class="w-button" style="background-color: #ffc520">
              <i class="iconfont icon-youxiang"></i>
              <span>邮箱账号登录</span>
            </div>
          </div>
        </div>

      </div>

  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginTypesWrap{
    height 630px
    .m-loginTypes{
      position: relative;
      height: 100%;
      background: #F2F5F4;
      .cont{
        width: 414px
        height: 389px
        .logoWrap{
          width 415px
          height: 66px
          text-align: center;
          padding-top: 2.13333rem;
          padding-bottom: 2.13333rem;
          background-color beige
          img{
            width: 3.57333rem;
            height: 1.2rem;
          }
        }
        .btnWrap{
          color: #f00;
          height: 161px;
          text-align: center;
          font-size: 20px;
          background-color: #d8bfd8;
          line-height: 161px;
          .iconfont{
            margin-right: .21333rem;
            position: relative;
            top: -.02667rem;
          }
        }
      }
    }
  }
</style>
