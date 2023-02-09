<template>
  <div class="hero-home js-hero-home">
    <img class="img" :src="img.url" :alt="img.alt">

    <div
      class="hero__player">
      <div class="unmute" @click="toggleMute">
        <svg
          v-if="!isMuted"
          viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.08 9H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.08a2 2 0 0 1 1.519.698l3.642 4.25c.604.704 1.759.277 1.759-.651V4.703c0-.928-1.155-1.355-1.76-.65L6.6 8.301A2 2 0 0 1 5.08 9zm13.556-4.725a1 1 0 1 0-1.377 1.45c3.655 3.472 3.655 9.078 0 12.55a1 1 0 1 0 1.377 1.45c4.485-4.26 4.485-11.19 0-15.45zm-2.947 2.8a1 1 0 1 0-1.378 1.45c2.027 1.925 2.027 5.025 0 6.95a1 1 0 1 0 1.378 1.45c2.857-2.714 2.857-7.136 0-9.85z" fill="currentColor"/></svg>
        <svg
          v-if="isMuted"
          viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.703c0-1.857-2.31-2.711-3.519-1.301L5.84 7.65a1 1 0 0 1-.76.35H5a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.08a1 1 0 0 1 .76.35l.712-.612l-.713.611l3.642 4.25c1.209 1.41 3.519.555 3.519-1.302V4.703zm3.293 4.59a1 1 0 0 1 1.414 0L19 10.586l1.293-1.293a1 1 0 1 1 1.414 1.414L20.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L19 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L17.586 12l-1.293-1.293a1 1 0 0 1 0-1.414z" fill="currentColor"/></svg>
      </div>
      <div class="wrap-video">
        <video
          v-if="videoDesktop"
          ref="desktopPlayer"
          class="video video-js video--desktop"
          playsinline
          :src="videoDesktop"></video>
        <video
          v-if="videoMobile"
          ref="mobilePlayer"
          class="video video--mobile"
          playsinline
          :src="videoMobile"></video>
      </div>
    </div>

    <div class="hero__marquee">
      <p v-for="(item, idx) in 10" :key="idx">
        {{ marquee }}
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videojs from 'video.js';
import 'videojs-youtube';

import 'video.js/dist/video-js.css';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'MainHero',
  props: {
    img: {
      type: [Object, Boolean],
      default: false,
    },
    videoDesktop: {
      type: String,
      default: ''
    },
    videoMobile: {
      type: String,
      default: ''
    },
    marquee: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      desktopPlayer: null,
      mobilePlayer: null,
      isMuted: false,
      playerOptions: {
        autoplay: true,
        controls: false,
        muted: true,
        techOrder: ['youtube'],
        youtube: {
          modestbranding: 1,
          playsinline: 1,
        }
      }
    }
  },
  mounted() {
    this.desktopPlayer = videojs(this.$refs.desktopPlayer, {
      ...this.playerOptions,
      sources: [
        {
          src: this.videoDesktop,
          type: 'video/youtube'
        }
      ]
    });

    this.mobilePlayer = videojs(this.$refs.mobilePlayer, {
      ...this.playerOptions,
      sources: [
        {
          src: this.videoMobile,
          type: 'video/youtube'
        }
      ]
    });


    this.desktopPlayer.play();
    this.mobilePlayer.play();
  },
  beforeDestroy() {
    if (this.desktopPlayer) {
      this.desktopPlayer.dispose();
    }
    if (this.mobilePlayer) {
      this.mobilePlayer.dispose();
    }
  },
  methods: {
    toggleMute() {
      this.desktopPlayer.play();

      if(this.isMuted) {
        this.desktopPlayer.muted(false);
      } else {
        this.desktopPlayer.muted(true);
      }

      this.isMuted = !this.isMuted;
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/home/hero";
</style>
