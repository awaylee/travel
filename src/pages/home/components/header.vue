<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width .64rem
    float left
    text-align center
    .back-icon
      font-size .4rem
  .header-input
    position relative
    flex 1
    background #fff
    border-radius .1rem
    margin-top .12rem
    height .64rem
    line-height .64rem
    margin-left .2rem
    padding-left .2rem
    color #ccc
    input
      position absolute
      width 80%
      height 100%
      left .6rem
  .header-right
    float right
    min-width 1.04rem
    padding 0 .1rem
    text-align center
    color #fff
    .arrow-icon
      font-size .24rem

</style>
