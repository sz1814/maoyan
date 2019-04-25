<template>
  <div>
    <van-nav-bar
      title="猫眼电影"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-tabs v-model="active" title-active-color="#df2d2d" line-width="150">
    <van-tab title="美团账号登陆">
      <van-cell-group >
        <van-field v-model="value" placeholder="账户名/手机号/Email" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入您的密码" />
      </van-cell-group>
    </van-tab>
    <van-tab title="手机验证登陆">
      <van-cell-group>
        <van-field v-model="phone" placeholder="请输入手机号" class="phone-a">
          <van-button slot="button" plain size="small" type="danger" tag="span" class="button-a">获取验证码</van-button>
        </van-field>
      </van-cell-group>

       <van-cell-group>
        <van-field
          v-model="sms"
          center
          clearable
          disabled
          placeholder="请输入短信验证码"
        >
        </van-field>
      </van-cell-group>
    </van-tab>
  </van-tabs>
  <router-link  :to="{ name: 'center' }" class="button" tag="div">登陆</router-link>
  <router-link to="" tag="span" class="left-a">立即注册</router-link>
  <router-link to="" tag="span" class="right-a">找回密码</router-link>
  </div>
</template>

<script>
export default {
   methods: {
    onClickLeft() {
      Toast('返回');
    }
  }
}
</script>


  <style lang="less">
    .phone-a{
      position:relative;
    }
    .botton-a{
      position:absolute;
    }
    .button{
      margin:15px;
      height:46px;
      width:335px;
      background:#df2d2d;
      font-size:20px;
      text-align:center;
      line-height:46px;
      border-radius:4px;
      color:#fff;

    }
    .left-a{
      font-size:14px;
      color:red;
      float:left;
      padding-left:15px;
    }
    .right-a{
      font-size:14px;
      color:red;
      float:right;
      padding-right:15px;
    }
  </style>
