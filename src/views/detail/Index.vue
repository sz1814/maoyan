<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" size="30px" color="#fff" @click="$router.back()"/>
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
        <div class="showImg">
          <div v-for="item in 20" :key="item">
            <img
              src="//p1.meituan.net/moviemachine/b014d18273419de881376d3509ced1a7184848.jpg@130w_180h.webp"
            >
            <span>小罗伯特·唐尼</span>
            <em>钢铁侠 Tony Stark / Iron Man</em>
          </div>
        </div>
      </div>

      <div class="quanti">
        <p>全体演职人员</p>
        <van-icon name="arrow" size="18px"/>
      </div>

      <div class="meitiku">
        <h2>媒体库</h2>

        <div class="chonggai">
          <div class="imgBox">
            <div v-for="item in 20" :key="item">
              <img
                src="//p0.meituan.net/movie/710fb2c4d00f7bd3dffbc4475bdc7c7a1128694.jpg@180w_140h_1e_1c.webp"
                alt
              >
            </div>
          </div>
        </div>

        <!-- <div>
          <div class="show">
            <img
              src="//p0.meituan.net/movie/710fb2c4d00f7bd3dffbc4475bdc7c7a1128694.jpg@180w_140h_1e_1c.webp"
              v-for="item in 20"
              :key="item"
            >
          </div>
        </div>-->

        <p class="p1">
          <span class="span1">视频</span>
          <span class="span2">
            <em class="em1">1</em>
            <em class="em2">
              <van-icon name="arrow" size="16px"/>
            </em>
          </span>
        </p>
        <p class="p2">
          <span class="span1">剧照</span>
          <span class="span2">
            <em class="em1">232</em>
            <em class="em2">
              <van-icon name="arrow" size="16px"/>
            </em>
          </span>
        </p>
      </div>

      <div class="shop">
        <h2>正版周边</h2>

        <div class="showImg">
          <div v-for="item in 20" :key="item">
            <img src="//p0.meituan.net/movie/f0a28d86b487db74a6c786e66eff7df198115.jpg.webp">
            <span>妇联4手办摆件</span>
            <em>
              <b>29.9</b>零售价49元
            </em>
          </div>
        </div>
      </div>

      <div class="zixun">
        <h2>资讯</h2>
        <div>
          <img
            src="//p0.meituan.net/movie/1b656ae339f1035013071f952e6068ce1103895.jpg@200w_150h_1e_1c.webp"
          >
          <p>曾濒临破产贱卖蜘蛛侠X战警，漫威如何用20年时间打了翻身仗？</p>
          <div>
            <van-icon name="arrow" size="16px"/>
          </div>
        </div>
      </div>

      <div class="paihang">
        <div class="paihangL">
          <div>
            <span>1</span>
            <p>昨日票房排行</p>
          </div>
          <div>
            <span>暂无</span>
            <p>首周票房</p>
          </div>
          <div>
            <span>47,615</span>
            <p>累计票房（万）</p>
          </div>
        </div>
        <div class="paihangR">
          <van-icon name="arrow" size="16px"/>
        </div>
      </div>

      <div class="taolun">
        <h2>讨论</h2>

        <div class="pinglun">
          <div class="touxiang">
            <img
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2349781172,4133730419&fm=27&gp=0.jpg"
            >
          </div>
          <div class="content">
            <span>沉默是金</span>
            <b>给这部作品打了9分</b>
            <p>
              十年漫威，从哪开始，从哪结束。
              整体9分。剧情场面6分，笑点玩梗1分，布局填坑1分，情怀1分。
              涉及英雄太多，观影门槛较高，影片前2个小时虽然轻松但太长，非粉丝可能get不到笑点。打斗场面稍弱，还有两处莫名其妙的bug，批评的声音可能会来自这几点。
              但是对漫威粉来说，绝对是一份满分电影。虽然可能有人对结局不满意，赌气减两分。不过作为终结篇，完成度已经很高了。六元老都有大量的画面进行落幕表演。其他英雄也有片段来满足粉丝的期盼，这对于拥有众多英雄，漫长故事线的漫威来说已经实属不易。
              最后只剩一棵树的星爵真沙雕，发福的锤哥真辣眼睛，能力逆天的女巫胸真大，正能量美队真五五开，外太空的惊奇队长真BUG！
            </p>
            <em>9小时前</em>
            <div class="zhan">
              <strong>
                <van-icon name="thumb-circle-o" size="18px"/>
                <i class="sz">5121</i>
              </strong>
              <strong>
                <van-icon name="chat-o" size="18px"/>
                <i class="sz">121</i>
              </strong>
            </div>
          </div>
        </div>

        <div class="pinglun">
          <div class="touxiang">
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1458905549,3416342455&fm=27&gp=0.jpg"
            >
          </div>
          <div class="content">
            <span>沉默是金</span>
            <b>给这部作品打了9分</b>
            <p>
              十年漫威，从哪开始，从哪结束。
              整体9分。剧情场面6分，笑点玩梗1分，布局填坑1分，情怀1分。
              涉及英雄太多，观影门槛较高，影片前2个小时虽然轻松但太长，非粉丝可能get不到笑点。打斗场面稍弱，还有两处莫名其妙的bug，批评的声音可能会来自这几点。
            </p>
            <em>9小时前</em>
            <div class="zhan">
              <strong>
                <van-icon name="thumb-circle-o" size="18px"/>
                <i class="sz">5121</i>
              </strong>
              <strong>
                <van-icon name="chat-o" size="18px"/>
                <i class="sz">121</i>
              </strong>
            </div>
          </div>
        </div>

        <div class="pinglun">
          <div class="touxiang">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1244345601,1146924154&fm=27&gp=0.jpg"
            >
          </div>
          <div class="content">
            <span>沉默是金</span>
            <b>给这部作品打了9分</b>
            <p>
              十年漫威，从哪开始，从哪结束。
              整体9分。剧情场面6分，笑点玩梗1分，布局填坑1分，情怀1分。
              涉及英雄太多，观影门槛较高，影片前2个小时虽然轻松但太长，非粉丝可能get不到笑点。打斗场面稍弱，还有两处莫名其妙的bug，批评的声音可能会来自这几点。
              但是对漫威粉来说，绝对是一份满分电影。虽然可能有人对结局不满意，赌气减两分。不过作为终结篇，完成度已经很高了。
            </p>
            <em>9小时前</em>
            <div class="zhan">
              <strong>
                <van-icon name="thumb-circle-o" size="18px"/>
                <i class="sz">5121</i>
              </strong>
              <strong>
                <van-icon name="chat-o" size="18px"/>
                <i class="sz">121</i>
              </strong>
            </div>
          </div>
        </div>

        <div class="ckpl">查看全部36548条评论</div>
      </div>

      <div class="yindao">
        <div class="d1">
          <img src="//p1.meituan.net/mmdb/250a17bc199c0b942073bec5429d2f422175.png.webp">
        </div>

        <div class="d2">
          <h4>家长引导</h4>
          <p>本片在韩国的评级为【12+】，未满12岁的儿童须在家长的陪同下观看。</p>
        </div>

        <div class="d3">
          <van-icon name="arrow" size="16px"/>
        </div>
      </div>

      <div class="xiangguan">
        <h2>相关电影</h2>
        <div class="xgShow">
          <div class="bigshow">
            <div v-for="item in 20" :key="item">
              <img
                src="//p0.meituan.net/movie/266d24fe8567632e078b3717a096d104359095.jpg@130w_180h.webp"
              >
              <p>复仇者联盟3：无限战争</p>
            </div>
          </div>
        </div>
      </div>

      <div class="xiazai">
        <a>下载猫眼电影，查看更多电影信息</a>
      </div>

      <div class="dibu">
        <span>© 猫眼电影 客服电话: 1010-5335</span>

        <p>京ICP备16022489号-1 京公网安备11010502030881号</p>

        <p>北京猫眼文化传媒有限公司</p>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.chonggai {
  width: 100%;
  height: 76px;
  overflow-x: auto;

  .imgBox {
    display: flex;
  }

  img {
    display: block;
    float: left;
    width: 90px;
    height: 70px;
    margin-right: 10px;
  }
}

.dibu {
  span {
    display: block;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: 20px;
    color: #9e9e9e;
    font-size: 12px;
  }
}

.xiazai {
  padding: 15px;

  a {
    display: block;
    background: #e54847;
    height: 36px;
    color: #fff;
    line-height: 36px;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
  }
}

.xiangguan {
  height: 188px;
  background: #fff;
  margin-top: 10px;

  h2 {
    width: 100%;
    height: 43px;
    line-height: 43px;
    border-bottom: 1px solid #ccc;
    padding-left: 15px;
  }
  .xgShow {
    height: 144px;
    overflow-x: auto;
    padding: 15px;
    overflow-y: hidden;
    .bigshow {
      min-width: 100px;
      display: flex;
      div {
        width: 73px;
        height: 118px;
        margin-right: 5px;
        float: left;

        img {
          width: 65px;
          height: 90px;
        }

        p {
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-top: 10px;
        }
      }
    }
  }
}

.yindao {
  height: 55px;
  margin-top: 10px;
  background: #fff;
  .d1 {
    height: 100%;
    width: 30px;
    float: left;

    img {
      width: 25px;
      height: 25px;
      margin-top: 15px;
      margin-left: 25px;
    }
  }

  .d2 {
    width: 289px;
    height: 100%;
    float: left;
    margin-top: 10px;
    margin-left: 30px;

    h4 {
      font-size: 14px;
    }
    p {
      font-size: 12px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .d3 {
    .van-icon {
      line-height: 65px;
    }
  }
}

.taolun {
  background: #fff;
  margin-top: 10px;

  h2 {
    width: 100%;
    height: 49px;
    border-bottom: 1px solid #ccc;
    line-height: 49px;
    padding-left: 20px;
  }

  .pinglun {
    padding: 15px;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #ccc;

    .touxiang {
      position: absolute;
      img {
        width: 34px;
        height: 34px;
      }
    }
    .content {
      margin-left: 40px;
      span {
        display: block;
        color: #333;
        font-size: 14px;
      }
      b {
        display: block;
        color: #999;
        font-size: 12px;
      }

      em {
        display: block;
        color: #999;
        font-size: 12px;
        margin-top: 20px;
      }

      .zhan {
        width: 180px;
        height: 26px;
        position: absolute;
        bottom: 15px;
        right: 0;

        strong {
          display: block;
          float: left;
          width: 69px;
          height: 25px;
          line-height: 25px;
          border: 1px solid #ccc;
          border-radius: 10px;
          position: relative;
          margin-left: 15px;

          .van-icon {
            line-height: 25px;
            margin-left: 5px;
          }

          .sz {
            position: absolute;
            right: 10px;
          }
        }
      }
    }
  }

  .ckpl {
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: red;
  }
}

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
    width: 375px;
    margin-top: 10px;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 15px;
    background: #fff;

    .showImg {
      display: flex;
      min-width: 10px;
      height: 162px;
      // position: absolute;

      div {
        width: 73px;
        height: 136px;
        margin-right: 10px;
        float: left;
        text-align: center;

        img {
          width: 65px;
          height: 90px;
          margin-left: 4px;
        }

        span,
        em {
          display: block;
          width: 70px;
          height: 18px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .quanti {
    height: 43px;
    width: 100%;
    line-height: 43px;
    padding: 0 15px 0;
    background: #fff;
    margin-top: 2px;

    p {
      height: 43px;
      width: 25%;
      float: left;
      color: #666;
      margin: 0;
      font-weight: lighter;
    }
    .van-icon {
      float: right;
      line-height: 43px;
      color: #666;
    }
  }

  .meitiku {
    height: 162px;
    margin-top: 10px;
    background: #fff;
    padding: 15px;

    .p1 {
      width: 125px;
      height: 40px;
      float: left;
      margin-right: 5px;
    }
    .p2 {
      width: 210px;
      height: 40px;
      float: left;
    }

    p {
      line-height: 40px;
      color: #666;
      font-weight: lighter;

      .span1 {
        float: left;
      }

      .span2 {
        float: right;
        em {
          float: left;
          line-height: 40px;
          margin-right: 10px;
        }
        .em2 {
          .van-icon {
            margin-top: 12px;
          }
        }
      }
    }
  }

  .shop {
    height: 261px;
    background: #fff;
    padding: 15px;
    margin-top: 10px;

    h2 {
      color: #666;
      margin: 0;
      font-weight: lighter;
      margin-bottom: 10px;
    }

    .showImg {
      display: flex;
      overflow-x: auto;

      div {
        float: left;

        span {
          display: block;
          text-align: center;
          color: #666;
          font-size: 14px;
          font-weight: 700;
          margin: 15px 0 10px;
        }

        em {
          display: block;
          text-align: center;

          b {
            font-weight: 400;
            font-size: 12px;
            color: #e54847;
          }
        }

        img {
          width: 125px;
          height: 125px;
          margin-right: 5px;
        }
      }
    }
  }

  .zixun {
    height: 134px;
    width: 100%;
    padding: 15px;
    margin-top: 10px;
    background: #fff;

    img {
      width: 100px;
      height: 75px;
      float: left;
    }

    p {
      width: 221px;
      height: 75px;
      color: #333;
      font-size: 16px;
      float: left;
      margin-left: 5px;
    }

    div {
      float: left;

      .van-icon {
        line-height: 75px;
      }
    }
  }

  .paihang {
    height: 87px;
    padding: 15px;
    background: #fff;
    margin-top: 10px;

    .paihangL {
      float: left;
      height: 87px;
      width: 325px;
      display: flex;
      justify-content: space-between;

      div {
        float: left;
        span {
          text-align: center;
          display: block;
          color: #e54847;
          font-size: 25px;
        }

        p {
          color: #999;
          font-size: 12px;
          text-align: center;
        }
      }
    }
    .paihangR {
      margin-left: 10px;
      .van-icon {
        line-height: 60px;
      }
    }
  }
}
</style>

