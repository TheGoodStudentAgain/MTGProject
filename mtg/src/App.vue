<template>
  <div class="small-logo">
    <img alt="Vue logo" class="small-logo" src="./assets/logo.png">
  </div>
  <MainView/>
</template>

<script>
import MainView from './components/CardList.vue'

export default {
  name: 'MTG : Magic the Gathering',
  components: {
    MainView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.small-logo {
  width: 350px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
}
</style>
