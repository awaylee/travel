<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
    <detail-list></detail-list>
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
    DetailList
    DetailBanner,
    DetailHeader
  }
}
</script>

<style scoped lang="stylus">
@import "~styles/varibles.styl"
.content
  height 50rem

</style>
