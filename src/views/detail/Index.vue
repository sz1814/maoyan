<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" size="30px" color="#fff"/>
      <div class="topName">复仇者联盟4：终局之战</div>
    </div>

    <div class="move-page">
      <div class="move-header">
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
      </div>

      <div class="goupiao">
        <a>特惠购票</a>
        <div
          class="wenzi"
        >改编自漫威漫画，也是漫威电影宇宙第22部影片。复仇者联盟的一众超级英雄，必须抱着牺牲一切的信念，与史上最强大反派灭霸殊死一搏，阻止其摧毁宇宙的邪恶计划阻止其摧毁宇宙的邪恶计划阻止其摧毁宇宙的邪恶计划阻</div>
        <div class="xiala">
          <van-icon name="arrow-down" size="18px"/>
        </div>
      </div>

      <div class="swiper">
        <van-swipe indicator-color="white" height="136">
          <van-swipe-item v-for="(ren, $index) in 15" :key="ren">
            {{ $index }}
            <img src="//p0.meituan.net/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg@177w_249h.webp"> 
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.top {
  width: 100%;
  height: 50px;
  background: #e54847;
  padding: 6px;

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

.move-page {
  background: #f4f4f4;
  position: relative;
  z-index: 1;
  margin: 0;
  color: #555;
  min-width: 3.1rem;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  font: 14px/1.5 Arial, Helvetica, sans-serif;

  .move-header {
    width: 100%;
    height: 183px;
    background-color: #666073;
    padding: 15px;

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
  }

  .goupiao {
    height: 163px;
    width: 100%;
    padding: 15px 15px 0 15px;
    background: #fff;
    position: relative;

    a {
      color: #fff;
      font-size: 16px;
      text-align: center;
      line-height: 36px;
      border-radius: 5px;
      display: block;
      width: 345px;
      height: 36px;
      background: #e54847;
    }

    .wenzi {
      width: 345px;
      height: 70px;
      margin-top: 10px;
      font-size: 15px;
      color: #555555;
      overflow: hidden;
    }

    .xiala {
      width: 345px;
      height: 22px;

      .van-icon {
        display: block;
        text-align: center;
        margin-top: 5px;
      }
    }
  }

  .swiper {
    height: 162px;
    width: 100%;
    background: #ccc;
    margin-top: 10px;

    .van-swipe__track {
      width:2400px !important;
    }

    .van-swipe-item {
      width:73px !important;
    }
  }
}
</style>

