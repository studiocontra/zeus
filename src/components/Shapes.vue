<template>
  <div class="shapes"
    :class="{'shapes--safari': isSafari, 'shapes--iphone': isIphone}">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'bgShapes',
  data() {
    return {
      isSafari: false,
      isIphone: false,
    };
  },
  mounted() {
    var checkSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                navigator.userAgent &&
                navigator.userAgent.indexOf('CriOS') == -1 &&
                navigator.userAgent.indexOf('FxiOS') == -1;

    var checkIphone = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                navigator.userAgent &&
                navigator.userAgent.indexOf('iPhone') > -1;

    this.isSafari = checkSafari;
    this.isIphone = checkIphone;
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/shapes";
</style>