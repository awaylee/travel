<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
@import "~styles/assets/styles/varibles.styl"
.header
  display flex
  line-height .86rem
  background $bgColor
  color #fff
  .header-left
    width .64rem
    float left
    text-align center
    .back-icon
      font-size .4rem
  .header-input
    flex 1
    background #fff
    border-radius .1rem
    margin-top .12rem
    height .64rem
    line-height .64rem
    margin-left .2rem
    padding-left .2rem
    color #ccc
  .header-right
    float right
    width 1.24rem
    text-align center
    .arrow-icon
      font-size .24rem

</style>
