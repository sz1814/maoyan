<template>
  <div>
    <div class="banner">
      <p class="title">近期最受期待</p>

      <div class="swiper">
        <div class="showImg">
          <div v-for="item in filmList" :key="item.id">
            <img :src="item.img" alt>
            <span>{{ item.nm }}</span>
            <p>{{ item.rt }}</p>
          </div>
        </div>
      </div>
    </div>

    <ul>
      <li v-for="films in filmList" :key="films.id">
        <div class="left">
          <img :src="films.img" alt>
        </div>
        <div class="right">
          <div class="right-i">
            <h2>{{ films.nm }}</h2>
            <span></span>
          </div>
          <div class="right-l">
            <div class="right-c">
              <div class="con-a" style="color:#faaf00;font-weight:bold">{{ films.wish }}</div>
              <div class="con-b" style="color:rgb(116, 115, 113);">人想看</div>
              <div class="con-c">主演：{{ films.star }}</div>
              <div class="con-d">{{ films.showInfo }}</div>
            </div>
            <div class="btn">预售</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("film", ["bannerList", "filmList"])
  },

  methods: {
    ...mapActions("film", ["getBannerList", "getFilmList"])
  },

  created() {
    this.getBannerList();
    this.getFilmList();
  }
};
</script>


<style lang="less">
.swiper {
  height: 161px;
  overflow-x: auto;
  overflow-y: hidden;
  .showImg {
    display: flex;
    div {
      float: left;
      margin-right: 10px;

      img {
        width: 85px;
        height: 115px;
      }

      span {
        width: 85px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        margin: 0 0 3px;
        font-size: 13px;
        color: #222;
      }

      p {
        margin: 0;
        font-size: 12px;
        color: #999;
      }
    }
  }
}

.title {
  margin: 15px 0 15px;
  font-size: 14px;
  color: #333;
}

.banner {
  width: 358px;
  height: 216px;
  margin: 0 auto;
  border-bottom: 10px solid #f0f0f0;

  .van-swipe__track {
    overflow: hidden;
    width: 2400px !important;
    .van-swipe-item {
      margin-right: 15px;
      width: 85px !important;
      height: 157px;

      img {
        width: 85px;
        height: 115px;
      }

      .line-ellipsis {
        margin: 3px 0 3px;
        font-size: 13px;
        color: #222;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: block;
        font-size: 0.83em;
        font-weight: bold;
      }

      .date {
        margin: 0;
        font-size: 12px;
        color: #999;
        display: block;
      }
    }
  }

  .van-swipe__indicator {
    display: none;
  }
}
</style>

