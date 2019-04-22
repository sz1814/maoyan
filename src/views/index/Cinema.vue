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
        readonly="false"
        input-align="center"
        shape="round"
      />
      </router-link>

    </form>

    <div class="nav">
      <van-tabs line-height="0"
      title-active-color="#e54847"
       @click="onCkick"
       >
        <van-tab >
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

    <div>
      <ul>
        <li v-for="item in 40">品牌</li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {


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
    border:.5px solid #e6e6e6;
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
</style>
