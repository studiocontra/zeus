<template>
  <div class="wrap-feed">
    <div class="feed__marquee">
      <a
        v-for="(item, idx) in 10"
        :key="idx"
        href="https://www.tiktok.com/@zeusecuador"
        target="_blank">
        Zeus en TikTok /
      </a>
    </div>

    <div class="wrap-posts container">
      <div class="single-post">
        <img src="/img/vaca.jpg" alt="">

        <div class="play">
          <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.5 15.4312C32.5 16.5859 32.5 19.4727 30.5 20.6274L5 35.3498C3 36.5045 0.499998 35.0611 0.499998 32.7517L0.5 3.30686C0.5 0.997463 3 -0.445914 5 0.708787L30.5 15.4312Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/feed";
</style>