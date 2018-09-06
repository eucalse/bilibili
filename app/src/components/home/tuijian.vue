<template>
  <div class="tuijian">
    <div class="rank">
      <p style="font-size:15px;color:#a1a1a1;display:inline-block;margin:10px 0px 10px 10px">综合</p>
      <div class="tuijian-rank">
        <img src="../../../static/rank.png">
        <label style="font-size:15px;color:#a1a1a1;">排行榜</label>
      </div>
    </div>
    <Carousel autoplay v-model="startpage" loop>
      <CarouselItem>
        <div class="carouselBox">
          <img :src="carouselList[0].img">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carouselBox">
          <img :src="carouselList[1].img">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carouselBox">
          <img :src="carouselList[2].img">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="carouselBox">
          <img :src="carouselList[3].img">
        </div>
      </CarouselItem>
    </Carousel>
      <ul  class="tuijian-lists">
      <router-link to="/content">
        <li class="list-item" @click="passId(recommend.id)" v-for="(recommend, index) in recommendList" v-bind:key="index">
          <img :src="recommend.pic">
          <label class="item-title"> {{ videoTitle(index) }}</label>
          <label class="item-info" v-html="recommend.typename"></label>
         </li>
      </router-link>
      </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      startpage: 1,
      carouselList: [],
      recommendList: []
    }
  },
  computed: {
  },
  methods: {
    // 读取本地轮播图
    getList: function () {
      var _this = this
      this.$http.get('../../../static/Carousel.json').then(
        response => {
          response.data.result.forEach(function (item) {
            _this.carouselList.push({
              title: item.title,
              img: item.img
            })
          })
        },
        response => {
          alert('error')
        }
      )
    },
    getInfo: function () {
      this.recomendList = []
      var _this = this
      Axios.get('/api/recommend').then(res => {
        res.data.list.forEach(function (item) {
          _this.recommendList.push({
            id: item.aid,
            typename: item.typename,
            title: item.title,
            play: item.play,
            author: item.author,
            description: item.description,
            pic: item.pic
          })
        })
      })
    },
    videoTitle: function (val) {
      var title = this.recommendList[val].title
      return title.length > 18 ? title.slice(0, 15) + '...' : title
    },
    passId: function (id) {
      this.$store.commit('passId', id)
    }
  },
  mounted: function () {
    this.getList()
    this.getInfo()
  }
}
</script>

<style>
.carouselBox {
  height: auto;
  padding: 10px;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-width: 100%;
  border-radius: 14px 14px 0 0;
}
.list-item {
  width: 45%;
  height: 190px;
  margin: 5px;
  display: inline-block;
  border-radius: 14px;
  background-color: white;
}
/*设置超出部分隐藏*/
.tuijian-lists {
  height: 75%;
  overflow: auto;
  margin-top: 5px;
  padding-left: 5px;
  margin-left: 7px;

}
.tuijian {
  position: absolute;
  width: 100%;
  top: 100px;
  bottom: 50px;
  overflow: hidden;
  background-color: #f5f5f5
}
.item-title {
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  height: 35px;
  line-height: 18px;
}
.item-info {
  font-size: 14px;
  color: #c1c1c1;
  margin-left: 16px;
}
.tuijian-rank {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}
.tuijian-rank > img {
  max-width: 30px;
  max-height: 30px;
  width: auto;
  height: auto;
}
</style>
