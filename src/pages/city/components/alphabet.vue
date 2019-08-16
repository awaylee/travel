<template>
  <div>
    <ul class="list">
      <li
        v-for="(item, key) of cities" :key="key"
        class="item">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alphabe',
  props: {
    cities: Object
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    color $bgColor
    .item
      line-height .4rem
      text-align center
</style>
