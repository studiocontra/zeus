<template>
  <transition name="fade">
    <Overlay v-if="!isLoaded" />
  </transition>

  <div class="page-home" v-if="isLoaded">
    <Head>
      <Title>Zeus</Title>
    </Head>

    <Header />

    <HomeHero
      :img="data.hero.background"
      :video-desktop="data.hero.video_desktop"
      :video-mobile="data.hero.video_mobile"
      :marquee="data.hero.marquee_text" />
    <HomeBenefits
      :headline="data.benefits.introduction"
      :items="data.benefits.items" />
    <HomeContent
      :img="data.content.image"
      :headline="data.content.headline"
      :content="data.content.content" />
    <HomeProducts
      :headline="data.products.headline"
      :products="data.products.categories" />
    <HomeValues
      :headline="data.values.headline"
      :img="data.values.main_image"
      :items="data.values.items" />
    <HomePartners
      :headline="data.delivery_partners.headline"
      :items="data.delivery_partners.items" />
    <HomeFeed
      :data="data.tiktok.posts" />

    <Footer />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'HomePage',
  data() {
    return {
      isLoaded: false,
      data: null,
      productsData: null,
    };
  },
  async created() {
    const { public: {API_BASE_URL} } = useRuntimeConfig();
    const {acf} = await $fetch(`${API_BASE_URL}/pages/2?acf_format=standard`);

    this.data = acf;
    this.isLoaded = true;

  },
  mounted() {
    AOS.init();

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
</script>

<style lang="scss" scoped>

// Fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
