<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/subcomponents/header/NavBar'
export default {
  name: 'app',
  components: { NavBar },
}
</script>

<style lang="scss">

</style>
