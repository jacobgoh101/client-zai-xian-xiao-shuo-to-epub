<template>
  <div class="home">
    <MainForm/>
  </div>
</template>

<script>
import MainForm from './subcomponents/MainForm'
export default {
  name: 'home',
  components: { MainForm },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
