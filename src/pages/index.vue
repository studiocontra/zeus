<template>
  <div class="page-home">
    <Head>
      <Title>Zeus</Title>
    </Head>

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
  mounted() {
    this.winW = window.innerWidth;
    this.winH = window.innerHeight;
    const vh = this.winH * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
</script>
