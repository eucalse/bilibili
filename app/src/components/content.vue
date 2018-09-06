<template>
  <div class="player">
    <iframe :src="videoInfo[0].url" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
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
  methods: {
    accessApi: function (id) {
      var _http = this.$api.videoInfo(id)
      var _this = this
      this.$axios.get(_http).then(res => {
        this.videoInfo.push({
          title: res.data.title,
          description: res.data.description,
          author: res.data.author,
          url: `//player.bilibili.com/player.html?aid=${_this.videoId}&cid=${res.data.cid}page=1`
        })
      })
    },
    getVideoId: function () {
      this.videoId = this.$store.state.id
      this.accessApi(this.videoId)
    }
  },
  mounted: function () {
    this.videoInfo = []
    this.getVideoId()
  }
}
</script>
