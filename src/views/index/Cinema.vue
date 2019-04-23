<template>
  <div>
    <h1 class="header">影院</h1>

    <form class="search" action="/">
      <router-link to="../city" class="dizhi">
        <span>深圳</span>
        <van-icon name="arrow-down"/>
      </router-link>
      <router-link to="../search">
        <van-search class="search-btn" placeholder="搜影院" input-align="center" shape="round"/>
      </router-link>
    </form>

    <div class="nav">
      <van-tabs :line-height="0" title-active-color="#e54847">
        <van-tab>
          <div slot="title" @click="allClick">
            全城
            <van-icon name="arrow-down" size="8px"/>
          </div>
          <div class="quancheng nav-fenlei">111</div>
        </van-tab>
        <van-tab>
          <div slot="title" @click="allClick">
            品牌
            <van-icon name="arrow-down" size="8px"/>
          </div>
          <div class="pinpai nav-fenlei">222</div>
        </van-tab>
        <van-tab>
          <div slot="title" @click="allClick">
            特色
            <van-icon name="arrow-down" size="8px"/>
          </div>
          <div class="tese nav-fenlei">333</div>
        </van-tab>
      </van-tabs>
      <div class="blacker" @click="onClick"></div>
    </div>

    <div class="con">
      <ul>
        <li v-for="yingyuan in yingyuanList" :key="yingyuan.id">
          <h2>
            {{ yingyuan.nm }}
            <b>
              {{ yingyuan.sellPrice }}
              <span>元起</span>
            </b>
          </h2>
          <p>
            <span>{{ yingyuan.addr }}</span>
            <em>距离 {{ yingyuan.distance }}</em>
          </p>
          <div class="biaoqian">
            <em v-if="yingyuan.tag.allowRefund === 1">退</em>
            <em>改签</em>
            <em class="yellow" v-if=" yingyuan.tag.snack === 1">小吃</em>
            <em class="yellow" v-if="yingyuan.tag.vipTag === '折扣卡' ">折扣卡</em>
            <em>餐厅</em>
          </div>
          <div class="tehui">
            <p>
              
              <em>卡</em>{{ yingyuan.promotion.cardPromotionTag }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  computed: {
    ...mapState("cinema", ["yingyuanList", "fenleiList"])
  },

  methods: {
    ...mapActions("cinema", ["getYingyuanList", "getFenleiList"]),

    allClick() {
      let blacker = document.querySelector(".blacker");
      blacker.style.display = "block";
      let fenlei = document.querySelector(".van-tabs__content");
      fenlei.style.display = "block";
    },
    onClick() {
      let blacker = document.querySelector(".blacker");
      blacker.style.display = "none";
      let fenlei = document.querySelector(".van-tabs__content");
      fenlei.style.display = "none";
    }
  },

  created() {
    this.getYingyuanList();
    this.getFenleiList();
  }
};
</script>

<style lang="less">
.header {
  width: 100%;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  margin: 0 52.5px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background: #e54847;
  color: #fff;
  position: fixed;
  top: 0;
}
.search {
  width: 100%;
  background: #f5f5f5;
  height: 44px;
  position: fixed;
  top: 50px;
  z-index: 99 !important;
  .dizhi {
    padding-left: 15px;
    color: #666;
    float: left;
    line-height: 44px;
    font-size: 15px;
  }
  .van-search__content {
    background: #fff;
  }
  .search-btn {
    border-radius: 8px;
    width: 280px;
    float: left;
    margin: 5px 18px 5px 15px !important;
    padding: 0;
    color: #b2b2b2;
    border: 0.4px solid #e6e6e6;
  }
}

element.style {
  background: #f5f5f5;
}
.nav {
  .blacker {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10 !important;
  }
  position: relative;
  width: 100%;
  position: fixed;
  top: 94px;
  .van-tabs {
    z-index: 99 !important;
  }
  .van-tabs__content {
    display: none;
  }
  .nav-fenlei {
    background: #fff;
    position: absolute;
    left: 0;
    color: red;
    top: 44px;
  }
}

.con {
  margin-top: 140px;
  ul {
    li {
      padding: 13px 15px 13px 0;
      margin: 0 15px;
      background-color: #fff;
      border-bottom: 1px solid #e0e0e0;
      h2 {
        b {
          color: red;
          margin-left: 5px;
          span {
            font-size: 12px;
            margin-left: 3px;
          }
        }
      }
      p {
        height: 19px;
        margin-top: 6px;
        color: #666;
        font-size: 12px;
        span {
          display: inline-block;
          width: 286px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          float: left;
        }
        em {
          float: right;
        }
      }
      .biaoqian {
        height: 17px;
        line-height: 17px;
        margin-top: 4px;
        margin-bottom: 4px;
        font-size: 0;
        em {
          display: inline-block;
          padding: 0 3px;
          height: 15px;
          line-height: 15px;
          border-radius: 2px;
          font-size: 12px;
          color: #589daf;
          border: 1px solid #589daf;
          margin-right: 5px;
        }
        .yellow {
          color: #f90;
          border: 1px solid #f90;
        }
      }
      .tehui {
        color: #999;
        p {
          em {
            background: #589daf;
            color: #fff;
            float: left;
            margin-right: 3px;
          }
        }
      }
    }
  }
}
</style>
