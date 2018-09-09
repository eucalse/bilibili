
<!--eslint-disable-->
<template>
  <div class="player">
    <a class="content-back" @click="backUp"><span><</span></a>
    <iframe class="bilibili-player" :src="videoInfo[0].url" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    <div class="switch-bar">
      <div class="link-container"><a>简介</a></div>
      <div class="link-container"><a>评论</a></div>
    </div>
    <div class="video-info">
      <div class="video-author">
        <img id="authorFace" class="author-face" :src=" videoInfo[0].face ">
         <p class="author-info">{{ videoInfo[0].author }}<br><span class="author-fans">{{ authorFans }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoId: '0',
      videoInfo: []
    }
  },
  computed: {
    authorFans: function () {
      if (this.videoInfo[0].mid < 1000) {
        return this.videoInfo[0].mid
      } else {
        var val = this.videoInfo[0].mid / 10000
        return val.toFixed(1) + '万'
      }
    }
  },
  methods: {
    // 获取视频信息axios请求
    accessApi: function (id) {
      var _http = this.$api.videoInfo(id)
      var _this = this
      this.$axios.get(_http).then(res => {
        this.videoInfo.push({
          title: res.data.title,
          description: res.data.description,
          author: res.data.author,
          play: res.data.play,
          review: res.data.review,
          video_review: res.data.video_review,
          favorites: res.data.favorites,
          credit: res.data.credit,
          face: res.data.face,
          mid: res.data.mid,
          coins: res.data.coins,
          url: `//player.bilibili.com/player.html?aid=${_this.videoId}&cid=${res.data.cid}page=1`
        })
      })
    },
    getVideoId: function () {
      this.videoId = this.$store.state.id
      this.accessApi(this.videoId)
    },
    backUp: function () {
      this.$router.go(-1)
    }
  },
  mounted: function () {
    this.videoInfo = []
    this.getVideoId()
  }
}
</script>

<style>
.player {
  width: 100%;
}
iframe {
  width: 100%;
  height: 30%;
}
.content-back {
  position: absolute;
  font-size: 22px;
  margin-left: 10px;
}
.content-back > span {
  color: black;
  opacity: 0.1;

}
.content-back > span:hover {
  opacity: 0.95;
  color: white;
}
.switch-bar {
  height: 40px;
  width: 100%;
}
.link-container {
  width: 49%;
  display: inline-block;
  margin-top: 6px;
  overflow: hidden;
  text-align: center;
}
.video-info {
  background-color: #fcfcfc;
  height: 60%;
  display: block;
}
.video-author {
  padding: 20px;
}
.author-face {
  width: 35px;
  height: 35px;
  border-radius: 35px;

}
.author-info {
color: #fc7299;
display:inline-block;
vertical-align:-13px;
margin-left: 10px
}
.author-fans {
  font-size: 12px;
  color: black
}
</style>
