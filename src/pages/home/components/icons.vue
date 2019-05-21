<template>
  <div id="homeIcons">
    <div class="icons">
      <div class="icon" v-for="item of iconList" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.url" alt="">
        </div>
        <p class="icon-desc">热门经典</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  data () {
    return {
      iconList: [{
        id: '01',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .icons
    overflow hidden
    height 0
    padding-bottom 50%
    .icon
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      overflow hidden
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
</style>
