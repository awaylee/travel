<template>
  <div id="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '暑期热卖相约北京',
        desc: '亲子欢乐游世园入皇宫逛皇城精华景区一览到底 24H接站'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/p78/201302/28/c2da123d4bb12ee593835fbb.jpg_256x160_3755801b.jpg',
        title: '北京纯玩五日游',
        desc: ' 全程五星酒店 无购物 不起早 不走马观花 享受休闲旅行慢时光'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1504/de/de67e39701f98515.water.jpg_256x160_1ccdec10.jpg',
        title: '暑期特惠',
        desc: ' 双人出游 立减50 四天三晚游皇城故宫 览园艺博览会 观升旗仪式'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 33.9%
  .item-img
    width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

</style>
