<template>
  <div>
    <h1 class="header">
      <i @click="onCancel"><van-icon name="arrow-left" /></i>
      猫眼电影
    </h1>
    <div class="search-">
      <form action="/">
        <div class="van-search">
          <van-icon name="search" />
          <input type="text"
          placeholder="搜索院"
          v-model="value"
          v-on:input="inputFunc"
          >
          <van-icon name="clear" />
        </div>
        <label @click="onCancel">取消</label>
      </form>

    </div>
    <div class="conte">
      <ul>
        <div class="list"
        v-for="(item,$index) in cinemaList"
        :key="item.id" >
          <div v-if="$index < 3">
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
          </div>
        </div>
        <router-link to="searchList" class="list-btn" v-if="cinemaList.length !== 0" >
          查看全部<em>{{ cinemaList.length }}</em>条消息
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'vant'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      value: "",
      cinemaList: []
    }
  },

  methods: {
    ...mapMutations("search",["setcinemaList"]),

    inputFunc() {
      if(this.value) {
        this.getCinema()
        console.log(this.value)
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

        if (res.status === 200) {
          this.cinemaList = []
          console.log(result)
          this.cinemaList = result.cinemas.list
          
          this.setcinemaList(this.cinemaList)
        } else {
          Toast(result.msg)
        }
        Toast.clear()
      })
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

  .search-{
    width: 100%;
    position: fixed;
    background: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    height: 48px;
    top:50px;
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

  .conte {
    margin-top: 100px;
    ul {
      background:#fff;
      .list {
        display: none;
        min-height:110px;
        padding: 13px 15px 13px 0;
        margin: 0 15px;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        div{
          height:24px;
          h3 {
            height:100%;
            max-width:250px;
            display:inline-block;
            float:left;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          b {
            height: 100%;
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
          margin-top: 16px;
          color: #666;
          font-size: 12px;
          span {
            display:block;
            width: 250px;
            height: 16px;
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
      .list:nth-of-type(1){
        display: block;
      }
      .list:nth-of-type(2){
        display: block;
      }
      .list:nth-of-type(3){
        display: block;
      }
      .list-btn{
        height: 44px;
        margin-left: 30%;
        line-height: 44px;
        color: #ef4238;
        font-size: 15px;
      }
    }
  }
</style>