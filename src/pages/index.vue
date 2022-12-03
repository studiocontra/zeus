<template>
  <div class="page-home">
    <Head>
      <Title>Zeus</Title>
    </Head>

    <transition name="fade">
      <Overlay v-if="!isLoaded" />
    </transition>

    <Header />

    <HomeHero />
    <HomeBenefits />
    <HomeContent />
    <HomeProducts />
    <HomeValues />
    <HomePartners />
    <HomeFeed />

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    this.winH = window.innerHeight;
    const vh = this.winH * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);

    setTimeout(() => {
      this.isLoaded = true;
    }, 500);
  },
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
