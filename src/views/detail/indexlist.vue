<template>
  <div>
    <div class="detail-top">
      <van-icon name="arrow-left" size="30px" color="#fff" @click="$router.back()"/>
      <div class="topName">复仇者联盟4：终局之战</div>
    </div>

    <div class="detail-move-header">
      <div class="movie-container">
        <img
          src="//p0.meituan.net/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg@177w_249h.webp"
          alt
        >
        <div class="content">
            <span>复仇者联盟4：终局之战</span>
            <b>Avengers: Endgame</b>
            <div class="renshu">
              <em>1825169</em>人想看
            </div>
            <p>动作,冒险,奇幻</p>
            <p>
              <em>美国</em>
              <em>181</em>
              <em>分钟</em>
            </p>
            <p>2019-04-24大陆上映</p>
          </div>
        </div>
        <router-link to="../detail" class="linkto">
          <van-icon name="arrow"  />
        </router-link>
    </div>
    <div class="riqi">
      <div class="riqi-box">
        <div class="riqi-juti" ref="riqi" @click="bianhong($index)" v-for="(item,$index) in list">  {{ item }}</div>
      </div>
    </div>
    <div class="detail-nav">
      <van-tabs :line-height="0" title-active-color= "#e54847">
        <van-tab >
            <div slot="title" ref="quancheng" @click="allClick">
              全城<van-icon  name="arrow-down" size="8px" />
            </div>
            <div class="quancheng nav-fenlei">
              <div class="qc_Fenlei">
                <ul>
                  <li @click="shopOnclick" class="qc_Fenlei_shop " ref="qc_Fenlei_shop">商区</li>
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
                          <li @click="xuanzhong($index)" ref="xuanzhong"
                           v-for="(dizhi,$index) in qu.subItems" :key="dizhi.id">
                            <span>{{ dizhi.name }}</span>
                            <em>{{ dizhi.count }}</em>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="qc_Fenlei_con1" ref="qc_Fenlei_con2">
                    <ul class="qu">
                      <li v-for="(xian,$index) in fenleiList.subway.subItems"
                        :key="xian.id" ref="NavClick"
                        class="onNavClick"
                        @click="NaClick($index)">
                        <span >{{ xian.name }}</span>
                        <em>({{ xian.count }})</em>
                        <ul class="juti" ref="ju">
                          <li @click="qc_titie($index)" ref="qc_titie"
                          v-for="(ditie,$index) in xian.subItems" :key="ditie.id">
                            <span>{{ ditie.name }}</span>
                            <em>{{ ditie.count }}</em>
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
            <div slot="title" ref="pinpai" @click="allClick">
              品牌<van-icon  name="arrow-down" size="8px" />
            </div>
            <div class="pinpai nav-fenlei">
              <ul>
                <li @click="yyname($index)" ref="yyname"
                v-for="(fenlei,$index) in fenleiList.brand.subItems" :key="fenlei.id">
                  <span>{{ fenlei.name }}</span><em>{{ fenlei.count }}</em>
                </li>
              </ul>
            </div>
        </van-tab>
        <van-tab >
            <div slot="title" @click="allClick">
              特色<van-icon  name="arrow-down" size="8px" />
            </div>
            <div class="tese nav-fenlei">
              <div class="tese_gn">特色功能</div>
              <div class="tese_gnlist">
                <ul>
                  <li @click="click_Red($index)" ref="click_Red"
                  v-for="(item,$index) in fenleiList.service.subItems"
                  :key="item.id">
                    {{ item.name }}
                  </li>
                </ul>
              </div>
              <div class="tese_teshu">特殊厅</div>
              <div class="tese_teshulist tese_gnlist">
                <ul>
                  <li @click="click__Red($index)" ref="click__Red"
                  v-for="(items,$index) in fenleiList.hallType.subItems"
                  :key="items.id">
                    {{ items.name }}
                  </li>
                </ul>
              </div>
              <div class="test-btn">
                <button @click="seat">重置</button>
                <button>确定</button>
              </div>
            </div>
        </van-tab>
      </van-tabs>
      <div class="blacker" ref="blacker" @click="onClick"></div>
    </div>

    <div class="detail-con">
      <ul>
        <li v-for="yingyuan in yingyuanList" :key="yingyuan.id">
          <div>
            <h3>
              {{ yingyuan.nm }}
            </h3>
            <b>
              {{ yingyuan.sellPrice }}
              <span>元起</span>
            </b>
          </div>
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
        seleDate: '',
        list: [],
        ide: 0
      }
    },
    computed: {
      ...mapState("cinema", ["yingyuanList", "fenleiList"]),
      ...mapState("city", ["curCity"]),
    },

    methods: {
      ...mapActions("cinema", ["getYingyuanList", "getFenleiList"]),
      allClick() {
        let fenlei = document.querySelector('.van-tabs__content')
        this.$refs.blacker.style.display = "block"
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
        for(let i = 0; i < 10; i++){
          this.$refs.onNavClick[i].classList.remove("liactive")
          this.$refs.juti[quIndex].classList.remove("jtdisplay")
        }
        this.$refs.onNavClick[$index].classList.add("liactive")
        quIndex = $index;
        this.$refs.juti[quIndex].classList.add("jtdisplay")
      },
      NaClick($index) {
        for(let i = 0; i < 9; i++){
          this.$refs.NavClick[i].classList.remove("liactive")
          this.$refs.ju[quIndex].classList.remove("jtdisplay")
        }
        this.$refs.NavClick[$index].classList.add("liactive")
        quIndex = $index;
        this.$refs.ju[quIndex].classList.add("jtdisplay")
      },
      click_Red($index) {
        for(let i = 0; i < this.$refs.click_Red.length; i++){
          this.$refs.click_Red[i].classList.remove("li_red")
        }
        this.$refs.click_Red[$index].classList.add("li_red")
      },
      click__Red($index) {
        for(let i = 0; i < this.$refs.click__Red.length; i++){
          this.$refs.click__Red[i].classList.remove("li_red")
        }
        this.$refs.click__Red[$index].classList.add("li_red")
      },
      seat() {
        for(let i = 0; i < this.$refs.click__Red.length; i++){
          this.$refs.click__Red[i].classList.remove("li_red")
        }
        for(let i = 0; i < this.$refs.click_Red.length; i++){
          this.$refs.click_Red[i].classList.remove("li_red")
        }
      },
      xuanzhong($index) {
        this.$refs.quancheng.innerText = this.$refs.xuanzhong[$index].firstChild.innerText
      },
      qc_titie($index) {
        this.$refs.quancheng.innerText = this.$refs.qc_titie[$index].firstChild.innerText
      },
      yyname($index) {
        this.$refs.pinpai.innerText = this.$refs.yyname[$index].firstChild.innerText
      },
      bianhong($index) {
        for(let i = 0; i < this.$refs.riqi.length; i++){
          this.$refs.riqi[i].classList.remove("riqi-juti-red")
        }
        this.$refs.riqi[$index].classList.add("riqi-juti-red")
      },

			getDate(n) {
				var ss = 24 * 60 * 60 * 1000
				var timestamp = new Date().getTime()
				var date1 = new Date(ss * n + timestamp)
				var newTime = date1.toLocaleString()
				var arr = newTime.split(" ")
				var arr2 = arr[0].split('/')
				return arr2[1] + '月' + arr2[2] + '日'
			}
    },

    created() {
      this.getYingyuanList()
      this.getFenleiList()
      var dateObj = {};

			for(var i = 1; i <= 10; i++) {
				dateObj = this.getDate(i); //把返回的日期赋值给对象
				this.list.push(dateObj); //把对象添加到数组里面，然后渲染到页面
			}
    },

  };
</script>

<style lang="less">
  .detail-top {
    width: 100%;
    height: 50px;
    background: #e54847;
    padding: 6px;
    position:fixed;
    top:0;
    .van-icon {
      position: absolute;
      top: 10px;
    }

    .topName {
      -webkit-box-flex: 1;
      color: #fff;
      font-size: 18px;
      text-align: center;
      line-height: 2;
      text-overflow: ellipsis;
      white-space: nowrap;
      left: -1rem;
    }
  }
  .detail-move-header {
    width: 100%;
    height: 183px;
    background-color: #666073;
    padding: 15px;
    position:fixed;
    top:50px;
    .movie-container {
      width: 345px;
      height: 153px;

      img {
        width: 109px;
        height: 153px;
        vertical-align: top;
        float: left;
        border: 1px solid #fff;
      }

      .content {
        width: 220px;
        height: 153px;
        float: right;
        color: #fff;

        b {
          font-size: 12px;
          opacity: 0.8;
        }

        span {
          font-size: 18px;
        }

        .renshu {
          color: #f90;
          font-size: 16px;
          margin-bottom: 10px;
        }
        p {
          font-size: 12px;
          opacity: 0.7;
        }
      }
    }
    .linkto{
      position:absolute;
      color:#fff;
      right: 20px;
      top: 80px;
      font-size: 26px;
    }
  }
  .riqi{
    width:100%;
    position:fixed;
    top:233px;
    height:50px;
    background:#fff;
    border-bottom: 1px solid #e0e0e0;
    overflow: auto;
    .riqi-box{
      width: 1150px;
      height:50px;
      .riqi-juti{
        float: left;
        width: 115px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: #666;
      }
      .riqi-juti-red{
        border-bottom: 2px solid #f03d37;
        color: #f03d37;
      }
    }
  }
  .detail-nav {
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
    top: 283px;
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
            font-size:12px;
            color:#777;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .li_red{
            color: #f03d37;
            border: 1px solid #f03d37;
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
          color: #777;
        }
        button:nth-of-type(2){
          float:right;
          background: red;
          color: #fff;
        }
      }
    }
  }

  .detail-con {
    margin-top: 325px;
    ul {
      background:#fff;
      li {
        padding: 13px 15px 13px 0;
        margin: 0 15px;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        div{
          height:24px;
          h3 {
            max-width:250px;
            display:inline-block;
            float:left;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          b {
            font-weight: 900;
            float:left;
            color: red;
            margin-left: 5px;
            margin-bottom: 7px;
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
            width: 250px;
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