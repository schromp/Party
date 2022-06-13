<template>
  <div id="app">
    <WantToDrink />
  </div>
</template>

<script>
import WantToDrink from './components/WantToDrink.vue';

export default {
  name: 'App',
  components: {
    WantToDrink
  }
}
</script>

<style scoped lang="scss">
#app {

  font-family: 'Abel', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  justify-content: center;

}
</style>
