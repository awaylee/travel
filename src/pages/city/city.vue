<template>
  <div id="city">
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style scoped>

</style>
