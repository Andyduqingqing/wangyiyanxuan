<template>
  <div id="scroll">
    <div class="HomeHeader">
      <header>
        <a href="javascript:;" id="logo"></a>
        <div class="topSearch">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共19918款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </header>
      <div class="tabWrap">
        <div class="m-tabs">
          <div class="header">
            <div class="inner">
              <div class="list">
                <div class="tab active">
                  <span class="txt">推荐</span>
                </div>
                <div class="tab" v-for="(kingkong,index) in kingkonglist" :key="index">
                  <span class="txt">{{kingkong.text}}</span>
                </div>
                <!--<div class="tab">-->
                  <!--<span class="txt">UGG女鞋</span>-->
                <!--</div>-->
                <!--<div class="tab">-->
                  <!--<span class="txt">丝芙兰</span>-->
                <!--</div>-->
                <!--<div class="tab">-->
                  <!--<span class="txt">电器</span>-->
                <!--</div>-->
              </div>
            </div>
          </div>
        </div>
        <div class="toggleWrap">
          <div class="linear"></div>
          <div class="toggle">
            <div class="icon"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/1.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/2.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/3.jpg" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="navlist active">
      <ul class="g-grow">
        <li>
          <i class="item"></i>
          <span class="text">网易自营品牌</span>
        </li>
        <li>
          <i class="item"></i>
          <span class="text">30天无忧退货</span>
        </li>
        <li>
          <i class="item"></i>
          <span class="text">48小时快速退款</span>
        </li>
      </ul>
    </div>
    <div class="navmiddle">
      <ul class="navcontent">
        <li v-for="(kingkong,index) in kingkonglist" :key="index">
          <img  class="img" :src="kingkong.picUrl">
          <span>{{kingkong.text}}</span>
        </li>
        <!--<li>-->
          <!--<img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">-->
          <!--<span>赞赞</span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">-->
          <!--<span>赞赞</span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">-->
          <!--<span>赞赞</span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">-->
          <!--<span>赞赞</span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">-->
          <!--<span>赞赞</span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">-->
          <!--<span>赞赞</span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt="">-->
          <!--<span>赞赞</span>-->
        <!--</li>-->
      </ul>
    </div>
    <div class="M-seation">
      <div class="M-tital">
        <span>--新人专享礼--</span>
      </div>
      <div class="M-content">
        <div class="M-left">
          <div class="M-span">新人专享礼包</div>
          <div class="M-img">
            <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
          </div>
        </div>
        <div class="M-right">
          <div class="R-top">
            <img src="./images/zan-is.png" alt="">
          </div>
          <div class="R-bottom">
            <img src="./images/zan-is.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="M-middle">
      <div class="M-middle-tital">
        <h4 class="M-middle-left">Alison的专属购物车</h4>
        <div class="M-middle-right">更多</div>
        <i class="i-icon"></i>
      </div>
      <ul class="M-middle-list">
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">CK制造商</h4>
              <div>
                <span class="price">
                  <span>25元起</span>
                </span>
                <i class="newicon">上新</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">AJ男鞋</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">最新款</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">专属</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/3040f3e5c8be6e8f3e9693a03606cb8c.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/eadb8d362726ccef7c40659a5f20e210.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/f898f62e0a3d68faf9506792f344a503.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/7808a303f35989ae5b6037c13dc7389c.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/2b6a121f9c18324ff0e10931526760b3.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/2fc924ae44eb0a37dda18690368851af.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/658009bf4e1d5288242642277aaab767.jpg'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/1a11408a40798e6574df29675a22664a.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/84d16a100eb7997ff106c48932268a4e.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="item" href="javascript:;" style="background-image: url('http://yanxuan.nosdn.127.net/0aef996150cac407742ab207ee6d22d9.png'); background-size: 100% 100%;">
            <div class="cnt">
              <h4 class="tital">Alison专属</h4>
              <div>
                <span class="price">
                  <span>8888元起</span>
                </span>
                <i class="newicon">定制</i>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import BScroll from 'better-scroll'

  import {mapState} from 'vuex'
  export default{
    mounted(){
/*      this.$store.dispatch('getPolicyDescList')
      this.$store.dispatch('getkingKongModule')
      this.$store.dispatch('getFocusList')
      this.$store.dispatch('getTagList')
      this.$store.dispatch('getPopularItemList')
      this.$store.dispatch('getNewItemList')*/
      new BScroll(".inner", {
        click: true,
        scrollX: true
      });
      new Swiper('.swiper-container',{
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
      this.$store.dispatch('getKingKongList')
      console.log(this)
    },
   computed:{
     ...mapState(['kingkonglist'])
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"

#scroll{
  height 30.5rem
}
.HomeHeader{
  position:fixed;
  top:0;
  left:0;
  z-index:300;
  width:100%;
  height:1.47rem;
}
header {
  width: 100%;
  height: 0.88rem;
  background-color: white;
  padding: 0.16rem 0.3rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  #logo {
    display: block;
    width: 1.38rem;
    height: 0.4rem;
    background: url('./images/logo.png') no-repeat;
    background-size: cover;
    margin-right: 0.2rem;
  }

  .topSearch {
    i {
      display: inline-block;
      width: 0.28rem;
      height: 0.28rem;
      vertical-align: middle;
      background-image: url('./images/search.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-right: 0.1rem;
    }

    flex-grow: 1;
    color: #666;
    font-size: 0.28rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 4.42rem;
    height: 0.56rem;
    background-color: #ededed;
    border-radius: 0.1rem;
  }

  .loginBtn {
    margin-left: 0.16rem;
    width: 0.72rem;
    height: 0.38rem;
    color: #b4282d;
    border: 0.01rem solid #b4282d;
    text-align: center;
    line-height: 0.38rem;
    border-radius: 0.076rem;
  }
}
.tabWrap {
  position: relative;
  z-index: 10;
  background: #fff;
  width: 100%;
  height: 0.6rem;
  margin-top: -0.01rem;
  padding: 0;
  margin-left -13px

  .m-tabs {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-right: 1rem;

    .header {
      display: flex;
      height: 100%;
      flex-flow: row nowrap;
      background-color: #fff;
      position: relative;

      .inner {
        height: 100%;
        position: relative;
        width: 100%;
        display: flex;
        overflow: hidden;

        .list {
          display: flex;
          flex-flow: row nowrap;
          flex-shrink: 0;
          height: 100%;
          padding: 0 0.3rem;
          background: #fff;

          .tab {
            margin-left: 0.2rem;
            padding: 0 0.16rem;
            flex-shrink: 0;
            height: 100%;
            position: relative;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
            z-index: 1;
            text-align: center;

            .txt {
              display: inline-block;
              line-height: 0.6rem;
              font-size: 0.28rem;
              color: #333;
              text-align: center;
            }

            &:first-of-type {
              margin-left: 0;
            }

            &.active {
              color: #b4282d;

              .txt {
                position: relative;
                color: #b4282d;
              }

              &::after {
                content: ' ';
                position: absolute;
                display: block;
                left: 0;
                bottom: 0.01rem;
                width: 100%;
                height: 0.04rem;
                background-color: #b4282d;
                box-sizing: border-box;
              }
            }
          }
        }
      }
    }
  }

  .toggleWrap {
    display: flex;
    flex-grow: 0;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1.5;
    color: #333;

    .linear {
      width: 0.6rem;
      height: 0.6rem;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
    }

    .toggle {
      width: 1rem;
      height: 0.6rem;
      text-align: center;
      background: #fff;

      .icon {
        width: 0.3rem;
        height: 0.3rem;
        background: url('./images/下拉按钮.png') no-repeat;
        margin-top: 0.15rem;
        display: inline-block;
        vertical-align: middle;
        background-size: 100% 100%;
      }
    }
  }

}

.content{
  width: 414px
  height: 220px
  position: relative;
  margin-top: 1.47rem;
  overflow hidden
  img{
    height 220px
  }
}

.navlist{
  position relative
  top 0
  left 0
  right 0
  padding 2px
  background #ffeddb
  width 100%
  height 40px
  .g-grow{
    width: 100%;
    height: 0.72rem;
    padding: 0 0.3rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    zoom: 1;
    li{
      margin-left 14px
      .item{
        width: 16px
        height: 16px
        display inline-block
        background url("./images/勾选.png");
        background-repeat no-repeat
        background-size 100%
      }
    }
  }
}

.navmiddle{
  position relative
  left 0
  right 0
  top 0
  width 414px
  height 188px
  background #fc8c84
  .navcontent{
    position relative
    width 100%
    height 100%
    li{
      display: block;
      width: 1.1rem;
      height: 1.56rem;
      float: left;
      margin: 0.1rem 0.14rem 0.09rem;
      &:nth-child(5n){
        margin-right 0
      }
      img{
        width: 1.1rem;
        height: 1.1rem;
        display: block;
      }
      span{
        margin-top: 0.1rem;
        text-align: center;
        font-size: 0.24rem;
        line-height: 0.36rem;
        white-space: nowrap;
        margin-left 15px
      }
    }
  }
}
.M-seation{
  background: #ffc520;
  margin-top: 0.2rem;
  padding-bottom: 0.3rem;
  height: 5.0rem
  overflow hidden
  .M-tital{
    height: 0.9rem;
    width: 100%;
    line-height: 0.9rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    padding: 0 0.4rem;
    background: #fff;
    overflow: hidden;
  }
  .M-content{
    overflow hidden
    padding-left 0.3rem
    background #ffc520
  }
  .M-left{
    display: block;
    width: 3.43rem;
    height: 4.34rem;
    background: #f9e9cf;
    border-radius: 0.04rem;
    margin-right: 0.04rem;
    float: left;
    color: #333;
    .M-span{
      font-family: PingFangSC-Medium;
      font-size: 0.32rem;
      padding: 0.3rem 0 0 0.3rem;
    }
    .M-img{
      margin-left 26px
      margin-top  20px
      width: 2.28rem;
      height: 2.29rem;
      img{
        width 100%
        height 100%
      }
    }
  }
  .M-right{
    float right
    height 242px
    margin: -1px;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
    .R-top{
      width: 3.43rem;
      height: 2.15rem;
      margin-bottom: 0.04rem;
    }
  }
}
.M-middle{
  background darksalmon
  height 800px
  .M-middle-tital{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.3rem;
    background: #fff;
    overflow: hidden;
    position relative
    .M-middle-left{
      float: left;
      font-size: 0.32rem;
      font-family: PingFangSC-Regular;
    }
    .M-middle-right{
      display: block;
      font-size: 0.28rem;
      float: right;
      color: #333;
      line-height: 1rem;
      position absolute
      left 346px
    }
    .i-icon{
      display: inline-block;
      vertical-align: middle;
      background-image: url("images/右箭头.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 0.13rem;
      height: 0.23rem;
      position absolute
      left 390px
      top 22px
    }
  }
  .M-middle-list{
    width 7rem
    height 23rem
    position: relative;
    overflow: hidden;
    background: #fff;
    margin-bottom: 0.2rem;
    padding: 0 0.26rem 0.26rem 0.3rem;
    font-size: 0rem;
    .item{
      background-size 100% 100%
      display: inline-block;
      position: relative;
      margin: 0 0.04rem 0.04rem 0;
      width: 3.43rem;
      height: 2.6rem;
      overflow: hidden;
      background-color: #f4f4f4;
      border-radius: 0.04rem;
      color: #7e8c8d;
      text-decoration: none;
      .cnt{
        position: absolute;
        left: 0;
        top: 0;
        padding-top: 0.23rem;
        width: 100%;
        z-index: 4;
        text-align: center;
        .tital{
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #333;
          font-family: PingFangSC-Medium;
          font-size: 0.28rem;
          line-height: 0.34rem;
          margin-bottom: 0.03rem;
        }
        div{
          text-align center
        }
        .price{
          color: #7f7f7f;
          span{
            font-size 0.24rem
          }

        }
        .newicon{
          display: inline-block;
          width: 0.64rem;
          height: 0.32rem;
          color: #fff;
          font-size: 0.24rem;
          line-height: 0.32rem;
          text-align: center;
          background: #cbb693;
          border-radius: 0.04rem;
          margin-left: 0.1rem;
        }
      }
    }
    li{
      float left
    }
  }
}

</style>
