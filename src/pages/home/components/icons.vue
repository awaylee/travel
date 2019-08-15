<template>
  <div id="homeIcons">
    <div class="icons">
      <swiper :options=swiperOption>
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
              <div class="icon-img">
                <img class="icon-img-content" :src="item.url" alt="">
              </div>
              <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
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
        desc: '景点门票',
        url: 'http://s.qunarzz.com/homenode/images/touchheader/piao.png'
      }, {
        id: '02',
        desc: '酒店',
        url: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png'
      }, {
        id: '03',
        desc: '度假',
        url: 'http://s.qunarzz.com/homenode/images/touchheader/flight.png'
      }, {
        id: '04',
        desc: '火车票',
        url: 'http:////s.qunarzz.com/homenode/images/touchheader/train.png'
      }, {
        id: '05',
        desc: '特惠酒店',
        url: 'http:////s.qunarzz.com/homenode/images/touchheader/group.png'
      }, {
        id: '06',
        desc: '低价机票',
        url: 'http://s.qunarzz.com/homenode/images/touchheader/bargainflight.png'
      }, {
        id: '07',
        desc: '民宿',
        url: 'http://s.qunarzz.com/homenode/images/touchheader/kezhan.png'
      }, {
        id: '09',
        desc: '汽车票船票',
        url: 'http://s.qunarzz.com/homenode/images/touchheader/bus.png'
      }, {
        id: '00',
        desc: '旅游团购',
        url: 'http://s.qunarzz.com/homenode/images/touchheader/tuan.png'
      }],
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top: .1rem
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
        ellipsis()
</style>
