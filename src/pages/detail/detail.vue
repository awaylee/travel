<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        desc: '大连圣亚海洋成人票',
        price: '240',
        children: [{
          title: '成人三馆连票',
          desc: '大连圣亚海洋成人票',
          price: '240',
          children: [{
            title: '成人三馆连票 某一连锁销售',
            desc: '大连圣亚海洋成人票',
            price: '240'
          }]
        }, {
          title: '成人五馆连票',
          desc: '大连圣亚海洋成人票',
          price: '240',
          children: [{
            title: '成人三馆连票 某一连锁销售',
            desc: '大连圣亚海洋成人票',
            price: '240'
          }]
        }]
      }, {
        title: '学生票',
        desc: '大连圣亚海洋成人票',
        price: '240',
        children: [{
          title: '成人三馆连票 某一连锁销售',
          desc: '大连圣亚海洋成人票',
          price: '240'
        }]
      }, {
        title: '儿童票',
        desc: '大连圣亚海洋成人票',
        price: '240',
        children: [{
          title: '成人三馆连票 某一连锁销售',
          desc: '大连圣亚海洋成人票',
          price: '240'
        }]
      }, {
        title: '特惠票',
        desc: '大连圣亚海洋成人票',
        price: '240'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
.content
  height 50rem

</style>
