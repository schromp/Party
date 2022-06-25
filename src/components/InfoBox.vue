<template lang="html">

  <div class="info-box">
    <h1> Am 2.7 gibts ne fette Party! </h1>
    <p> Wenn du Bock und Zeit hast trag deinen Namen ein damit ich bescheid weiß :) </p>
    <input id="nameinput" type="text" placeholder="Name">
    <ButtonPreset type="weiter" @click="weiter()"></ButtonPreset>
  </div>

</template>

<script lang="js">
import ButtonPreset from './ButtonPreset.vue'

export default {
  name: "info-box",
  props: ['gname'],
  mounted() {
  },
  data() {
    return {};
  },
  methods: {
    weiter() {
      if(document.getElementById('nameinput').value) {
        this.$emit('weiter', document.getElementById('nameinput').value)
      }
    }
  },
  computed: {},
  components: { ButtonPreset }
}


</script>

<style scoped lang="css">
html {
  background-color: #a8dadc;
}

.info-box {
  width: min(90%, 30rem);
  margin-inline: auto;
}

#nameinput {
  margin: 1em;
  box-sizing: border-box;
  padding: 0.5em 1em;
  height: 30px;
  border: 2px solid;
  border-radius: 6px;
  background-color: transparent;
}

#nameinput:focus {
  outline: none;
}
</style>
