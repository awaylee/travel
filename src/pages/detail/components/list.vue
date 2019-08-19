<template>
  <div class="detailList">
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-content border-bottom">
        <div class="item-left">{{item.desc}}</div>
        <div class="item-right"><span>￥</span>{{item.price}}<span>起</span></div>
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .item-title-icon
    position relative
    display inline-block
    width .36rem
    height .36rem
    top .06rem
    left .06rem
    background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right .1rem
    background-size .4rem 3rem
  .item-title
    padding 0 .2rem
    line-height .8rem
    font-size .32rem
  .item-content
    display flex
    padding .2rem
    justify-content space-between
    .item-right
      color orange
      font-size .42rem
      span
        font-size .16rem
        color #ccc
        &:first-child
          color orange
  .item-children
    padding 0 .2rem

</style>
