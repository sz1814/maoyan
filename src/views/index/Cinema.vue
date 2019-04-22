<template>
  <div>
    <h1 class="header">影院</h1>

    <form class="search" action="/">
      <router-link to="../city" class="dizhi">
        <span>深圳</span>
        <van-icon name="arrow-down" />
      </router-link>
      <router-link to="../search">
        <van-search
        class="search-btn"
        placeholder="搜影院"
        input-align="center"
        shape="round"
      />
      </router-link>

    </form>

    <div class="nav">
      <van-tabs line-height=0
      title-active-color="#e54847"

       >
        <van-tab @click="onNavClick">
            <div slot="title">
              全城<van-icon name="arrow-down" size="8px" />
            </div>
            <div class="quancheng">
              111
            </div>
        </van-tab>
        <van-tab >
            <div slot="title">
              品牌<van-icon name="arrow-down" size="8px" />
            </div>
              222
        </van-tab>
        <van-tab >
            <div slot="title">
              特色<van-icon name="arrow-down" size="8px" />
            </div>
              333
        </van-tab>
      </van-tabs>
    </div>

    <div class="con">
      <ul>
        <li>
          <h2>
            电影院名字
            <b>
              价格
              <span>元起</span>
            </b>
          </h2>
          <p>
            <span>电影院地址电影院地址电影院地址电影院地址电影院地址电影院地址电影院地址电影院地址电影院地址电影院地址</span>
            <em> 距离 kg</em>
          </p>
          <div class="biaoqian">
            <em>退</em>
            <em>改签</em>
            <em class="yellow">小吃</em>
            <em class="yellow">折扣卡</em>
            <em>餐厅</em>
          </div>
          <div class='tehui'>
            <p><em>卡</em>开卡特惠，首单两张立减4元</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  onNavClick(index) {
    console.log(111);
  }
}
</script>

<style lang="less">

.header{
  width:100%;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  margin: 0 52.5px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background:#e54847;
  color:#fff;
  position:fixed;
  top:0;
}
.search{
  width:100%;
  background:#f5f5f5;
  height: 44px;
  position:fixed;
  top:50px;
  .dizhi{
    padding-left:15px;
    color:#666;
    float:left;
    line-height:44px;
    font-size:15px;
  }
  .van-search__content{
    background:#fff;
  }
  .search-btn{
    border-radius:8px;
    width:280px;
    float:left;
    margin: 5px 18px 5px 15px !important;
    padding:0;
    color:#b2b2b2;
    border:.4px solid #e6e6e6;
  }
}

element.style{
  background: #f5f5f5 ;
}
.nav{
  width:100%;
  position:fixed;
  top:94px;
  .van-tabs__content{
    display:none;
  }
}
.con{
  margin-top:140px;
  ul{
    li{
      padding: 13px 15px 13px 0;
      margin: 0 15px;
      background-color: #fff;
      border-bottom: 1px solid #e0e0e0;
      h2{
        b{
          color:red;
          margin-left: 5px;
          span{
            font-size: 12px;
            margin-left: 3px;
          }
        }
      }
      p{
        height: 19px;
        margin-top: 6px;
        color: #666;
        font-size: 12px;
        span{
          display: inline-block;
          width: 286px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          float: left;
        }
        em{
          float: right;
        }
      }
      .biaoqian{
        height: 17px;
        line-height: 17px;
        margin-top: 4px;
        margin-bottom: 4px;
        font-size: 0;
        em{
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
        .yellow{
          color: #f90;
          border: 1px solid #f90;
        }
      }
      .tehui{
        color:#999;
        p{
          em{
            background:#589daf;
            color:#fff;
            float:left;
            margin-right: 3px;
          }
        }
      }
    }
  }
}

</style>
