<template>
  <div id="app">
    <DrinksGrid></DrinksGrid>
  </div>
</template>

<script>
import DrinksGrid from './components/DrinksGrid.vue';

export default {
  name: 'App',
  components: {
    DrinksGrid
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
