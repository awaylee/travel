<template>
  <div id="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts2/1804/fd/fd9b14f02e001802.jpg_180x120_db1151f3.jpg',
        title: '暑期热卖相约北京',
        desc: '亲子欢乐游世园入皇宫逛皇城精华景区一览到底 24H接站'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts0/1706/be/b857682ca4a48a02.jpg_180x120_b9b5b90b.jpg',
        title: '北京纯玩五日游',
        desc: ' 全程五星酒店 无购物 不起早 不走马观花 享受休闲旅行慢时光'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/tts7/1708/3f/d3d43658a63bcb02.jpg_180x120_fe146a37.jpg',
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
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff9300
      padding 0 .1rem
      border-radius .06rem
      color #fff

</style>
