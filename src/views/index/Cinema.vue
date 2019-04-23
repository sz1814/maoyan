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
      <van-tabs :line-height="0" title-active-color= "#e54847">
        <van-tab >
            <div slot="title" @click="allClick">
              全城<van-icon name="arrow-down" size="8px" />
            </div>
            <div class="quancheng nav-fenlei">
              <div class="qc_Fenlei">
                <ul>
                  <li @click="shopOnclick" class="qc_Fenlei_shop" ref="qc_Fenlei_shop">商区</li>
                  <li @click="metroOnclick" class="qc_Fenlei_metro" ref= "qc_Fenlei_metro">地铁站</li>
                </ul>
              </div>
              <div class="qc_con">
                <ul>
                  <li class="qc_Fenlei_con1" ref="qc_Fenlei_con1" >
                    <ul class="qu" >
                      <li v-for="(qu,$index) in fenleiList.district.subItems"
                        :key="qu.id" ref="onNavClick"
                        class="onNavClick"
                        @click="onNaClick($index)">
                        <span >{{ qu.name }}</span>
                        <em>({{ qu.count }})</em>
                        <ul class="juti" ref="juti">
                          <li v-for="dizhi in qu.subItems" :key="dizhi.id">
                            <span>{{ dizhi.name }}</span>
                            <em>{{ dizhi.count }}</em>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="qc_Fenlei_con1" ref="qc_Fenlei_con2">
                    <ul class="qu">
                      <li v-for="(qu,$index) in fenleiList.subway.subItems"
                        :key="qu.id" ref="NavClick"
                        class="onNavClick"
                        @click="NaClick($index)">
                        <span >{{ qu.name }}</span>
                        <em>({{ qu.count }})</em>
                        <ul class="juti" ref="ju">
                          <li v-for="dizhi in qu.subItems" :key="dizhi.id">
                            <span>{{ dizhi.name }}</span>
                            <em>{{ dizhi.count }}</em>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
        </van-tab>
        <van-tab >
            <div slot="title" @click="allClick">
              品牌<van-icon name="arrow-down" size="8px" />
            </div>
            <div class="pinpai nav-fenlei">
              <ul>
                <li v-for="fenlei in fenleiList.brand.subItems" :key="fenlei.id">
                  <span>{{ fenlei.name }}</span><em>{{ fenlei.count }}</em>
                </li>
              </ul>
            </div>
        </van-tab>
        <van-tab >
            <div slot="title" @click="allClick">
              特色<van-icon name="arrow-down" size="8px" />
            </div>
            <div class="tese nav-fenlei">
              <div class="tese_gn">特色功能</div>
              <div class="tese_gnlist">
                <ul>
                  <li v-for="item in 4" :key="item">全部</li>
                </ul>
              </div>
              <div class="tese_teshu">特殊厅</div>
              <div class="tese_teshulist tese_gnlist">
                <ul>
                  <li v-for="item in 13" :key="item">全部</li>
                </ul>
              </div>
              <div class="test-btn">
                <button>重置</button>
                <button>确定</button>
              </div>
            </div>
        </van-tab>
      </van-tabs>
      <div class="blacker" ref="blacker" @click="onClick"></div>
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
let quIndex = 0;
export default {
   data() {
    return {
    }
  },

  computed: {
    ...mapState("cinema", ["yingyuanList", "fenleiList"])
  },

  methods: {
    ...mapActions("cinema", ["getYingyuanList", "getFenleiList"]),

    allClick() {
      this.$refs.blacker.style.display = "block"
      let fenlei = document.querySelector('.van-tabs__content')
      fenlei.style.display = "block"
    },
    onClick() {
      this.$refs.blacker.style.display = "none"
      let fenlei = document.querySelector('.van-tabs__content')
      fenlei.style.display = "none"
    },
    shopOnclick() {
      this.$refs.qc_Fenlei_con1.style.display = "block"
      this.$refs.qc_Fenlei_con2.style.display = "none"
      this.$refs.qc_Fenlei_metro.classList.remove("qc_Fenlei_shop2")
      this.$refs.qc_Fenlei_shop.classList.add("qc_Fenlei_shop2")
    },
    metroOnclick() {
      this.$refs.qc_Fenlei_con1.style.display = "none"
      this.$refs.qc_Fenlei_con2.style.display = "block"
      this.$refs.qc_Fenlei_shop.classList.remove("qc_Fenlei_shop2")
      this.$refs.qc_Fenlei_metro.classList.add("qc_Fenlei_shop2")
    },
    onNaClick($index) {
      for(let i = 0; i <= 9; i++){
        this.$refs.onNavClick[i].classList.remove("liactive")
        this.$refs.juti[quIndex].classList.remove("jtdisplay")
      }
      this.$refs.onNavClick[$index].classList.add("liactive")
      quIndex = $index;
      this.$refs.juti[quIndex].classList.add("jtdisplay")
      console.log(fenleiList.subway.subItems)
    },
    NaClick($index) {
      for(let i = 0; i < 9; i++){
        this.$refs.NavClick[i].classList.remove("liactive")
        this.$refs.ju[quIndex].classList.remove("jtdisplay")
      }
      this.$refs.NavClick[$index].classList.add("liactive")
      quIndex = $index;
      this.$refs.ju[quIndex].classList.add("jtdisplay")
      console.log(quIndex)
    },
    // onItemClick(data) {
    //   this.activeId = data.id;
    // }
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
  width: 100%;
  position: fixed;
  top: 94px;
  .van-tabs {
    z-index: 99 !important;
  }
  .van-tabs__content {
    display: none;
  }
  .nav-fenlei{
    width:100%;
    background:#fff;
    position:absolute;
    left:0;
    top:0;
  }
  .quancheng{
     position:relative;
    .qc_Fenlei{
      ul{
        li{
          float:left;
          width:50%;
          height:44px;
          margin-left:0;
          text-align:center;
          font-size:15px;
          color:#666;
          line-height:44px;
        }
        .qc_Fenlei_shop2{
          color:red;
          border-bottom:2px solid #e54847;
        }

      }
    }
    .qc_con{
        height:446px;
      ul{
        li{
          z-index:10;
          position:absolute;
          top:44px;
          left:0;
          display:none;
          height:402px;
        }
        .qc_Fenlei_con1{
            height:402px;
            width:100%;
            margin-left:0;
            .qu{
              width:45%;
              height:402px;
              overflow:auto;
              li{
                margin-left: -20px;
                padding-left: 50px;
                width:100%;
                height:44px;
                line-height:44px;
                position:static!important;
                background:#fff;
                color:#777;
                display:block;
                .juti{
                  display:none;
                  width:66%;
                  position:absolute;
                  top:0;
                  left:148px;
                  height:402px;
                  overflow:auto;
                  background:#f0f0f0;
                  li:nth-of-type(1){
                    color:red;
                  }
                  li{
                    padding-left:50px;
                    background:#f0f0f0;
                    span{
                      float:left;
                    }
                    em{
                      float:right;
                      margin-right:80px;
                    }
                  }
                }
                .jtdisplay{
                  display:block;
                }
              }
              .liactive{
                color:red;
                background:#f0f0f0;
              }
            }
          }
          .qc_Fenlei_con2{
            width:65%;
            height:402px;
          }
      }
    }
  }
  .pinpai{
    height:340px;
    overflow:auto;
    ul{
      margin-top:44px;
      li{
        height:45px;
        line-height:45px;
        border-bottom:1px solid #e0e0e0;
        font-size:12px;
        color:#333;
        span{
          padding-left:10px;
          float:left;
        }
        em{
          padding-right:20px;
          float:right;
          color:#8f9296;
        }
      }
    }
  }
  .tese{
    padding: 0 13px;
    margin-top:44px;
    .tese_gn{
      font-size: 15px;
      color: #777;
      margin: 11px 0 0 12px;
    }
    .tese_gnlist{
      text-align:center;
      ul{
        li{
          float:left;
          width: 70px;
          height:38px;
          margin: 10px 9.5px 0 0;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          line-height:38px;
        }
      }
    }
    .tese_teshu{
      font-size: 15px;
      color: #777;
      margin: 11px 0 0 12px;
      width: 100%;
      float: left;
    }
    .test-btn{
      float: left;
      width: 100%;
      height: 61px;
      background: #fafafa;
      button{
        background: #fff;
        border: 1px solid #f0f0f0;
        border-radius: 5px;
        width: 76px;
        height: 34px;
        margin-top: 13px;
      }
      button:nth-of-type(2){
        float:right;
        background: red;
        color: #fff;
      }
    }
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
