<template>
  <div class="player">
    <a class="content-back" @click="backUp"><span v-html="'<'"></span></a>
    <iframe class="bilibili-player" :src="videoInfo[0].url" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    <div class="switch-bar">
      <div class="link-container"><a>简介</a></div>
      <div class="link-container"><a>评论</a></div>
    </div>
    <div class="video-info">
      <div class="video-author">
        <img id="authorFace" class="author-face" :src=" videoInfo[0].face ">
         <p class="author-info">{{ videoInfo[0].author }}<br><span class="author-fans">{{ authorFans }}粉丝</span></p>
         <img class="author-atten" src="../../static/content/+关注.png">
      </div>
      <div class="row-flex">
        <div id="video-title" :class="[titleDrop ? 'text-hidden' : 'text-visiable' , 'video-title']">
          {{ videoInfo[0].title }}
        </div>
        <a class="drop-button" @click="titleDrop = !titleDrop" v-html="dropEver"></a>
      </div>
      <div class="row-flex">
        <div id="video-description" :class="[desDrop ? 'text-hidden' : 'text-visiable', 'video-description']">
          {{ videoInfo[0].description }}
        </div>
        <a class="drop-button" @click="desDrop = !desDrop" v-html="desDrop ? 'V' : '^'"></a>
      </div>
      <div class="row-flex">
        <div class="user-selection">
          <img src="../../static/content/点赞.png">
        </div>
        <div class="user-selection">
          <img src="../../static/content/差评.png">
        </div>
        <div class="user-selection">
          <img src="../../static/content/投币.png">
        </div>
        <div class="user-selection">
          <img src="../../static/content/收藏.png">
        </div>
        <div class="user-selection">
          <img src="../../static/content/转发.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoId: '0',
      videoInfo: [],
      titleDrop: true, // 判断是否点击标题下拉按钮
      desDrop: true, // 判断是否点击下拉按钮
      titleOverflow: false, // 判断标题长度是否有隐藏部分
      desOverflow: false // 判断描述部分是否有隐藏部分

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
    },
    dropEver: function () {
      if (this.titleOverflow) {
        if (this.titleDrop) {
          return 'V'
        } else {
          return '^'
        }
      } else {
        return ''
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
    },
    testTitleLength: function () { // 判断标题长度是否overflow
      var length = document.getElementById('video-title')
      if (length.scrollWidth > length.clientWidth) {
        this.titleOverflow = true
      }
    },
    testDesLength: function () { // 判断描述长度是否overflow
      var length = document.getElementById('video-description')
      if (length.scrollWidth > length.clientWidth) {
        this.desOverflow = true
      }
    }

  },
  mounted: function () {
    this.videoInfo = []
    this.getVideoId()
    this.titleOverflow = false // 初始化判断信号
    this.desOverflow = false
  },
  updated: function () { // 更新dom后实现长度判断
    this.testTitleLength()
    this.testDesLength()
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
  padding: 20px 20px 0 20px;
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
  font-size: 11px;
  color: #9a9a9a;
}
.author-atten {
  width: auto;
  height: auto;
  max-width: 80px;
  max-height: 100px;
  float: right;
  margin-top: 10px;
}
/*设置文字换行显示*/
.video-title {
  width: 85%;
  margin-left: 10px;
  font-size: 20px;
}
.drop-button {
  padding: 5px 0 0 15px;
  width: 10%;
  float: right;
}
/*栅格布局*/
.row-flex {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.video-description {
  width: 85%;
  color: #9a9a9a;
  padding: 10px;
  margin: 0 10px 0 0 ;
  font-size: 14px;
}
.text-hidden {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-selection {
  width: 15%;
  margin:20px;
}
</style>
