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
        desc: '景点门票1',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '02',
        desc: '景点门票2',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '03',
        desc: '景点门票3',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '04',
        desc: '景点门票4',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '05',
        desc: '景点门票5',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '06',
        desc: '景点门票6',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '07',
        desc: '景点门票7',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '09',
        desc: '景点门票8',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        id: '00',
        desc: '景点门票9',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
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
