<template>
  <div>
    <h1 class="header">
      <i @click="onCancel"><van-icon name="arrow-left" /></i>
      猫眼电影
    </h1>
    <div class="cone">
      <ul>
        <div class="list"
        v-for="item in cinemaList" :key="item.id" >
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
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
      ...mapState("search", ["cinemaList"])
  },
  methods: {
    onCancel() {
      window.history.back(-1)
    }
  }
}
</script>
<style lang="less">
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
  .cone {
    margin-top: 50px;
    ul {
      background:#fff;
      .list {
        min-height:100px;
        padding: 13px 15px 13px 0;
        margin: 0 15px;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        div{
          height:24px;
          h3 {
            max-width:250px;
            display:inline-block;
            // float:left;
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
          span {
            display:block;
            width: 250px;
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
          min-height: 17px;
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
