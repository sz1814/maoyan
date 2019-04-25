<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active" active-color="#f03d37">
      <van-tabbar-item icon="home-o" :to="{ name: 'films', params: {filmType: '.n-hot'} }">电影</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{ name: 'cinemas' }">影院</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :to="{ name: 'login' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    let active = this.$route.meta.tabName
    return {
      active: active
    }
  }
}
</script>


