<template>
  <div id="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
export default {
  name: 'home',
  components: {
    HomeSwiper,
    HomeHeader,
    HomeIcons
  }
}
</script>

<style>

</style>
