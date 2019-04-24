<template>
  <div>
    <h1 class="header">
      <i @click="onCancel"><van-icon name="arrow-left" /></i>
      猫眼电影
    </h1>
    <div class="search">
      <form action="/">
        <div class="van-search">
          <van-icon name="search" />
          <input type='text'
          placeholder="搜索院"
          v-model="value" v-on:input ="inputFunc"
          @keydown.down="changeDown()"
          @keydown.up="changeUp()"
          >
          <van-icon name="clear" />
        </div>
        <label @click="onCancel">取消</label>
      </form>

    </div>
    <div class="con">
      <ul>
        <li :class="{list:$index===now}"
        v-for="(item,$index) in cinemaList" :key="item.id">
          <div>
            <h3>
              {{ item.nm }}
            </h3>
            <b>
              {{ item.sellPrice }}
              <span>元起</span>
            </b>
          </div>
          <p>
            <span clsaa="ps">{{ item.addr }}</span>
            <em>距离 {{ item.distance }}</em>
          </p>
          <div class="biaoqian">
            <em v-if="item.sell === true">座</em>
            <em v-for=" yinyuan in item.hallType" :key="yinyuan">{{ yinyuan }}</em>
            <em v-if="item.allowRefund === 1">退</em>
            <em v-if="item.endorse === 1" >改签</em>
            <em class="yellow" v-if="item.snack === 1">小吃</em>
            <em class="yellow" v-if="item.vipDesc === '折扣卡'">折扣卡</em>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'vant'
export default {
  data() {
    return {
      valve: '',
      cinemaList: [],
      now:-1
    }
  },

  methods: {

    inputFunc() {
      if(this.value) {
        this.cinemaList = []
        this.getCinema()
      }
    },
    getCinema() {
      axios.get('/maoyan/ajax/search?',{
        params: {
          kw: this.value,
          cityId: 30,
          stype: 2
        }
      }).then(res => {
        let result = res.data
        console.log(result)
        if (res.status === 200) {
          console.log(result)
          this.cinemaList = result.cinemas.list
        } else {
          console.log(result)
          Toast(result.msg)
        }
        Toast.clear()
      })
    },
    changeDown() {
      this.now++
      if(this.now === this.cinemaList.length) {
        this.now = -1
      }
    },
    changeUp: function() {
      this.now--;
      if (this.now === -2) {
        this.now = this.cinemaList.length - 1;
      }
    },

    onCancel() {
      window.history.back(-1)
    }
  }
}
</script>


<style lang="less">
  body{
    background: #f5f5f5;
  }
  .header{
    height: 50px;
    line-height: 50px;
    color: #fff;
    background: #e54847;
    font-size: 18px;
    i{
      float: left;
      font-size: 28px;
      line-height: 50px;
      width: 40px;
    }
  }

  .search{
    background: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    height: 48px;
    .van-search{
      height:30px;
      background: #fff;
      float: left;
      margin: 8px 5px 8px 10px;
      border-radius: 8px;
      border: 1px solid #eee;
      input{
        width:250px;
        height: 28px;
        font-size:12px;
        border: none;
        background: #fff;
        margin-left: 5px;
      }
      i{
        color:#e0e0e0;
      }
    }
    label{
      float:left;
      line-height:48px;
    }
  }

  .con {
    margin-top: 100px;
    ul {
      background:#fff;
      .list {
        height:100px;
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
          .ps {
            display:block;
            width: 270px;
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
      }
    }
  }
</style>