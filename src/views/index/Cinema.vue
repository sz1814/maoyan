<template>
  <div>
    <h1 class="header">影院</h1>
    <form class="search" action="/">
      <router-link to="../city" class="dizhi" @click="city">
        <span>深圳</span>
        <van-icon name="arrow-down" />
      </router-link>
      <router-link to="../search">
        <van-search
        class="search-btn"
        v-model="value"
        placeholder="搜影院"
        readonly="false"
        input-align="center"
        shape="round"
      />
      </router-link>

    </form>
  </div>
</template>

<script>

export default {
  city () {

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
}
.search{
  width:100%;
  background:#f5f5f5;
  height: 44px;

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
</style>
