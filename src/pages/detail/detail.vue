<template>
  <div>
    <detail-banner></detail-banner>
    <detail-list></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailList from './components/list'
export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailList
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"

</style>
