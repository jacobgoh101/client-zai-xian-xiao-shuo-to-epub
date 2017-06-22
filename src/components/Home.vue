<template>
  <div class="home">
    <LoadingOverlay />
    <PopupBottom />
    <MainForm />
  </div>
</template>

<script>
import MainForm from './subcomponents/MainForm'
import LoadingOverlay from './subcomponents/LoadingOverlay'
import PopupBottom from './subcomponents/PopupBottom'
export default {
  name: 'home',
  components: { MainForm, LoadingOverlay, PopupBottom },
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
