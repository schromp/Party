<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="css">
html,
body {
  margin: 0;
  padding: 0;
  background-color: #90e0ef;
}

#app {

  font-family: 'Abel', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: medium;
}
</style>
