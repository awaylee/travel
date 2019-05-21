<template>
  <div id="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
export default {
  name: 'home',
  components: {
    HomeSwiper,
    HomeHeader
  }
}
</script>

<style>

</style>
