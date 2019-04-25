<template>
  <div class="app">
    <h1 class="nav-header">猫眼电影</h1>

    <div class="tab">
      <div class="dizhi">
        <router-link tag="span" to='../city'>上海</router-link>
        <van-icon name="arrow-down" size="10px"/>
      </div>
      <div class="tabName">
        <van-tabs title-active-color="#ef4238" @click="onTabClick" v-model="curTab">
          <van-tab title="正在热映">
            <nhot />
          </van-tab>
          <van-tab title="即将上映">
            <fhot />
          </van-tab>
        </van-tabs>
      </div>
      <div class="search">
        <router-link to="../search">
          <van-icon name="search" size="25px" color="red"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import nhot from "@/components/.n-hot.vue";
import fhot from "@/components/.f-hot.vue";
export default {
  data () {
    return {
      curTab: 0
    }
  },

  components: {
    nhot,
    fhot
  },

  methods: {
    onTabClick (index) {
      let filmType = index === 0 ? '.n-hot' : '.f-hot';
      this.$router.replace({
        name: 'films',
        params: {
          filmType
        }
      })
    }
  }
}
</script>


<style lang="less">
body {
  font-size: 16px;
  box-sizing: border-box;

  .nav-header {
    width: 100%;
    height: 52px;
    line-height: 51px;
    background: #e54847;
    color: #fff;
    font-weight: 400;
    text-align: center;
    font-size: 18px;
    position: fixed;
    top: 0;
    z-index: 100;
  }

  .tab {
    margin-top: 52px;
    width: 375px;
    height: 45px;
    border-bottom: 1px solid #ccc;
    position: relative;

    .dizhi {
      width: 100px;
      height: 45px;
      background: #fff;
      line-height: 50px;
      position: fixed;
      top: 52px;
      border-bottom: 1px solid #ccc;
      z-index: 1000;

      span {
        font-size: 15px;
        line-height: 45px;
        color: #666;
        position: absolute;
        left: 25px;
      }
      .van-icon {
        position: absolute;
        top: 17px;
        left: 55px;
      }
    }

    .van-tabs {
      width: 300px;
      float: left;

      .van-tabs__wrap {
        width: 200px;
        height: 45px;
        border-bottom: 1px solid #ccc;
        margin-left: 88px;
        position: fixed;
        top: 52px;
        z-index: 1000;

        .van-ellipsis {
          font-size: 15px;
          font-weight: 700;
        }
      }

      .van-tabs__content {
        width: 375px;
      }
    }

    .search {
      width: 100px;
      height: 45px;
      background: #fff;
      position: absolute;
      right: 0;
      position: fixed;
      top: 52px;
      border-bottom: 1px solid #ccc;
      .van-icon {
        position: absolute;
        top: 10px;
        right: 20px;
      }
    }
  }
}
</style>

