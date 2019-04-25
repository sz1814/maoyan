<template>
  <div>
    <h1 class="nav-top">
      我的
    </h1>

    <div class="tou">
      <img src="https://img.meituan.net/maoyanuser/eb034d2079940678c7c4222a833bde7510190.png" />
    </div>

    <div class="dingdan">
      <p>我的订单</p>
      <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556188803267&di=e2e997aefdec9a71cd370145e5f8731c&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F07%2F28%2F7f1dc8f645c9ca6cd5fdc80a66a95e88.jpg" alt="">
        <span>电影</span>
      </div>

       <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556189339952&di=14b2056530a9a53e9b4477919f2184f8&imgtype=0&src=http%3A%2F%2Fimg.aso.aizhan.com%2Ficon%2F95%2F5d%2Fea%2F955dea204443d45bd4e001ba74a1790e.jpg" alt="">
        <span>商城</span>
      </div>
    </div>

    <div class="list">
      <div>
        <a>在线观影</a>

        <van-icon name="arrow" color="#ccc" />
      </div>
      <div>
        <a>优惠券</a>
        <van-icon name="arrow" color="#ccc" />
      </div>
      <div>
        <a>折扣卡</a>
        <van-icon name="arrow" color="#ccc" />
      </div>
    </div>
  </div>
</template>

<style lang="less">
body{
  background: #777;
  font-size: 14px;
}

.nav-top{
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #f03d37;
  font-size: 18px;
  color: #fff;
}
.tou {
  width: 100%;
  height: 150px;
  background: #f03d37;
  padding-top: 42px;
  margin-bottom: 10px;

  img {
    width: 66px;
    height: 66px;
    border-radius: 33px;
    margin: auto;
  }
}

.dingdan {
  width: 100%;
  height: 150px;
  padding: 15px;
  background: #fff;
  margin-bottom: 10px;

  p {
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
  }

  div {
    width: 172px;
    height: 90px;
    float: left;

    img {
      width: 40px;
      height: 40px;
      border-radius: 33px;
      margin: auto;
      margin-bottom: 10px;
    }
    span {
      display: block;
      width: 40px;
      text-align: center;
      margin: auto;
    }
  }
}

.list {
  width: 100%;
  height: 132px;
  padding-left: 15px;
  background: #fff;

  div {
    height: 44px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 16px;
    color: #333;
    line-height: 44px;
    position: relative;
  }

  .van-icon {
    position: absolute;
    top: 10px;
    right: 0;
  }
}
</style>



