<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/p/tts7/1605/c1/ad42f60508d31cf7.jpg_r_640x420x90_93655b91.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">产品编号 3140230995</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe604;</span>39</div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'banner',
  data () {
    return {
      imgs: ['https://img1.qunarzz.com/p/tts7/1605/c1/ad42f60508d31cf7.jpg_r_640x420x90_93655b91.jpg',
        'https://img1.qunarzz.com/p/tts5/1511/74/352a9439dabfe6f7.jpg_r_640x420x90_235e71eb.jpg'],
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus">
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      margin-top .14rem
      padding 0 .4rem
      line-height .32rem
      border-radius .2rem
      background rgba(0,0,0,.8)
      font-size .24rem
      .banner-icon
        padding 0 .1rem
        font-size .24rem

</style>
