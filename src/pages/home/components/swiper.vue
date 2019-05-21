<template>
  <div id="homeSwiper" class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          url: 'http://img1.qunarzz.com/piao/fusion/1807/5e/cfee2e9e2f357202.jpg_750x200_b0308a43.jpg'
        }, {
          id: '0002',
          url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/e4a4bf3cf8a2db15ec11a82f78d49901.jpg_750x200_f3de96e6.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 26.25%
    background-color #eee
    .swiper-img
      width 100%

</style>
