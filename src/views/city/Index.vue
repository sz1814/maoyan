<template>
  <div class="main city-list">
    <!-- <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
    />-->
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail">
                <div class="city-item-text">上海</div>
              </li>
              <li class="city-item-detail">
                <div class="city-item-text">天津</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="lv-indexsection"
        v-for="item in newCityList"
        :key="item.name">
          <p class="lv-indexsection__index">{{ item.name }}</p>
          <ul>
            <li
            v-for="city in item.citys" :key="city.cityId">{{ city.name }}</li>
          </ul>
        </div>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
          <li v-for="item in pys" 
          :key="item" 
          @click="fn1(item)"
          :id="'box' + item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("city", ["cityList"]),

    ...mapGetters("city", ["newCityList", "pys"])
  },

  methods: {
    ...mapActions("city", ["getCityList"]),

    fn1(item) {
      let boxEl = document.getElementById('box' + item)
      let top = boxEl.offsetTop
      document.getElementById('lv-indexlist__content').scrollTop = top
    }
  },

  created() {
    this.getCityList();
  }
};
</script>

<style lang="less">
@import "~@/styles/common/mixins.less";

.city-list {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;

  .lv-indexlist {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    background: #fff;
    overflow: hidden;
    position: relative;
    &__content {
      flex: 1;
      height: 100%;
      overflow-y: auto;
    }
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 100%;
      li {
        width: 25px;
        height: 18px;
        font-size: 12px;
        color: #191a1b;
      }
    }

    .lv-indexsection {
      &__index {
        background-color: #f4f4f4;
        color: #515253;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 15px;
        margin-bottom: -1px;
        li {
          .border-1-bottom;
          font-size: 15px;
          position: relative;
          height: 48px;
          line-height: 48px;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }

    .recommend-city {
      padding-left: 15px;
      padding-top: 15px;

      .city-index-title {
        font-size: 13px;
        color: #797d82;
        margin-bottom: 10px;
      }

      .city-index-detail {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .city-item-detail {
          width: 33.33%;
          text-align: center;
          padding-bottom: 15px;
          box-sizing: border-box;
          float: left;

          .city-item-text {
            height: 30px;
            line-height: 30px;
            background-color: #f4f4f4;
            border-radius: 3px;
            box-sizing: border-box;
            margin: 0 7.5px;
            font-size: 14px;
            color: #191a1b;
          }
        }
      }
    }
  }
}
</style>
