<template>
  <div>
    <ul>
      <router-link tag="li" to="../detail" v-for="films in filmList" :key="films.id">
        <div class="left">
          <img  :src="films.img"  alt>
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
              <div class="con-d">{{ films.showInfo }} </div>
            </div>
            <div class="btn">预售</div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("film", ["filmList"])
  },

  methods: {
    ...mapActions("film", ["getFilmList"]),
    
  },

  created() {
    this.getFilmList();
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
h2,
h3,
h4,
h5,
h6 {
  font-size: 16px;
}
ul,
li {
  list-style: none;
}
li {
  height: 144px;
  width: 350px;
  margin-left: 14px;
}
.left,
.right {
  float: left;
  padding-top: 12px;
}
.right {
  height: 90px;
  width: 255px;
  padding: 12px 14px 12px 12px;
  position: relative;
}
img {
  height: 90px;
  width: 64px;
}
h2 {
  width: 150px;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 900;
}
.con-a,
.con-b {
  font-size: 14px;
  display: inline;
  line-height: 14px;
  margin-top: 6px;
}
.con-c,
.con-d {
  font-size: 14px;
  color: rgb(116, 115, 113);
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
  margin-top: 6px;
}
.btn {
  width: 47px;
  height: 27px;
  line-height: 28px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: #3c9fe6;
  position: absolute;
  border-radius: 4px;
  right: 0;
  top: 40px;
}
</style>

