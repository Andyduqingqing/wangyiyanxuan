<template>
    <div style="width:100%;height:100%;overflow:hidden">
      <header >
        <div class="wrap">
           <div class="home"></div>
           <div class="tital">
             <a href="#" class="item active">发现</a>
             <a href="#" class="item">青青</a>
           </div>
           <div class="util">
             <div class="search"></div>
             <div class="shopcart"></div>
           </div>
        </div>
        <div class="scroll">
          <div class="flexbox">
            <a href="" class="item active">推荐</a>
            <a href="" class="item">达人</a>
            <a href="" class="item">上新</a>
            <a href="" class="item">酷炫</a>
            <a href="" class="item">青青</a>
          </div>
        </div>
      </header>
      <div class="list">
         <div>
           <div>
             <div class="tps2" v-for="(item,index) in topicList" :key="index">
               <a data-v-af2a400a="" href="/topic/v1/pub/dGp47MP4uW.html">
                 <div data-v-af2a400a="" class="info">
                   <div data-v-af2a400a="" class="info">
                     <div data-v-af2a400a="" class="name">
                       <span data-v-af2a400a="" class="ava">
                         <img data-v-af2a400a="" class="img" :src="item.picUrl" alt="" width="100%" height="100%" v-lazy="item.avatar">
                       </span>
                       <span data-v-af2a400a="">{{item.nickname}}</span>
                     </div>
                     <div data-v-af2a400a="" class="title">{{item.title}}</div>
                     <div data-v-af2a400a="" class="desc">{{item.subTitle}}</div>
                     <div data-v-af2a400a="" class="rcount">
                       <i data-v-af2a400a="" class="icon"></i>
                       <span data-v-af2a400a="">{{item.readCount | filterPeople }}人看过</span>
                     </div>
                   </div>
                 </div>
                 <div data-v-af2a400a="" class="pic" :style="{background:`url(${item.picUrl})`}">
                 </div>
               </a>
             </div>
           </div>
           <div></div>
         </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {reqTopicList} from "../../api"
  import {mapState} from 'vuex';
  export default {
    computed:{
      ...mapState(['topicList'])
    },
    methods:{
      _initBScroll(){
        this.$nextTick(()=>{
          new BScroll('.scroll',{
            click:true
          })
        });
      }
    },
    mounted(){
     this.$store.dispatch('getTopicList')
    },



  }
</script>

<style lang="stylus" scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 0.01rem solid #d9d9d9;
  z-index: 1000;

  .wrap{
    width: 100%;
    height: 1rem;
    padding: 0 0.26rem 0 0.24rem;
    position: relative;
    .home{
      width: 25px;
      height: 50px;
      background-size: 100%;
      position absolute
      left 10px
      top 10px
      background-image  url("home.png")
      background-repeat no-repeat
    }
    .tital{
      position: absolute;
      left: 102px;
      top: 0;
      font-size: 15px;
      line-height: 43px;
      transform: translateX(-25%);
      text-align: center;
      width: 128px;
      .item{
        padding: 0 0.16rem;
        vertical-align: middle;
        &.active{
          font-size: 0.4rem;
          color: red;
          font-weight: bold;
        }
      }
      a{
        color: deeppink;
        text-decoration: none;
      }
     }
    .util{
      position: absolute;
      width: 130px;
      height: 50px;
      top: 0;
      right: 0.26rem;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      .search{
        background url("search.png")
        background-repeat no-repeat
        background-size: 100%;
        position absolute
        top 10px
        width 23px
        height: 50px
      }
      .shopcart{
        background url("购物车.png")
        background-repeat no-repeat
        background-size 100%;
        position absolute
        top -3px
        left 36px
        width: 50px
        height 50px
      }
    }
  }
  .scroll{
    width 100%
    height 100%
    display flex
    overflow hidden
    .flexbox{
      flex-shrink: 0;
      -webkit-box-flex: 1;
      flex-grow: 1;
      height: 0.72rem;
      background: rebeccapurple;
      border-bottom: 0.01rem solid #d9d9d9;
      font-size: 0px;
      display: flex;
      justify-content: space-around;
      .item{
        flex-shrink: 0;
        height: 100%;
        line-height: 0.72rem;
        padding: 0 0.08rem;
        margin: 0 0.2rem;
        vertical-align: middle;
        font-size: 0.28rem;
      }
    }
  }
}
.list{
  height: 100%;
  width: 100%;
  overflow: hidden;
  >div{
    padding: 1.73rem 0 0.97rem;
    .tps2{
      position: relative;
      padding: 0.32rem 0.3rem;
      width: 100%;
      height: 3.36rem;
      background: #fff;
      margin: 0.2rem 0;
      a{
        color: #7e8c8d;
        text-decoration: none;
      }
      .info{
        width: 200px;
        height:112px;
        float: left;
        .name{
          color: #333;
          line-height: 0.36rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .ava{
            width: 27px;
            height: 27px;
            overflow: hidden;
            border-radius: 50%;
            border: 0.01rem solid #d9d9d9;
            margin-right: 0.12rem;
            img{
              width: 27px
              height 27px
            }
          }
          .span{
            display: inline-block;
            vertical-align: middle;
          }
        }
        .rcount{
          position: absolute;
          left: 0.3rem;
          bottom: 48px;
          font-size: 0.22rem;
          color: #999;
          line-height: 0.32rem;
          margin-top: 0.18rem;
          width: 86px;
          top: 122px;
          height: 18px;
        }
        .title{
          width: 100%;
          font-size: 0.36rem;
          color: #333;
          line-height: 0.44rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          padding-top: 0.32rem;
          font-family: PingFangSC-Regular;
        }
        .desc{
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 0.28rem;
          line-height: 0.4rem;
          padding-top: 0.08rem;
          color: #7f7f7f;
        }
        .rcount{
          position: absolute;
          left: 0.3rem;
          bottom: 0.26rem;
          font-size: 0.22rem;
          color: #999;
          line-height: 0.32rem;
          margin-top: 0.18rem;
          .icon{
            display: inline-block;
            width: 0.28rem;
            height: 0.2rem;
            vertical-align: middle;
            margin-right: 0.08rem;
            background-size: 100% 100%;
            background-image url("查看.png")
            background-repeat no-repeat
          }
          span{
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
      .pic{
        width: 2.72rem;
        height: 2.72rem;
        position: relative;
        overflow: hidden;
        border-radius: 0.08rem;
      }
    }
  }
}
</style>
