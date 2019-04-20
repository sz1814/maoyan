<template>
  <div>
    <router-view></router-view>
    
    <van-tabbar v-model="active" active-color="#f03d37">
      <van-tabbar-item icon="home-o">电影</van-tabbar-item>
      <van-tabbar-item icon="search">影院</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>


