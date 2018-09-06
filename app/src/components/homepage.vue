<template>
  <div class="outside">
    <div id="homepage">
      <router-view></router-view>
    </div>
    <div class="tabs">
          <router-link class="tab" to="/home">
            <img src="../../static/home.png">
          </router-link>
          <router-link class="tab" to="/channel">
            <img src="../../static/channel.png">
          </router-link>
          <router-link class="tab" to="/active">
            <img src="../../static/active.png">
          </router-link>
          <router-link class="tab" to="/mall">
            <img src="../../static/mall.png">
          </router-link>
          <router-link class="tab" to="/mine">
            <img src="../../static/mine.png">
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
}
</script>
