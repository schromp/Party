<template lang="html">

  <div class="drink-box" @click="auswahl(`${name}`)"  :id="`${name}`">
    <img :src="require(`@/assets/${imgsource}`)"  class="drink-image">
    <p> {{name}} </p>
  </div>

</template>

<script lang="js">

export default {
  name: 'drink-box',
  props: ['name', 'imgsource'],
  mounted() {

  },
  data() {
    return {
      //selected: 
    }
  },
  methods: {
    auswahl(name) {
      const box = document.getElementById(name).classList
      if(!box.contains("drink-box-selected")) {
        box.add("drink-box-selected")
        this.selected.push(name)
        //$emit
} else {
        box.remove("drink-box-selected")
        //TODO remove from list
      }
    }
  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.drink-box {
  padding: 20px;
  border: 2px solid;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  transition-duration: 250ms;
}

.drink-box:hover {
  cursor: pointer;
}

.drink-box-selected{
  border-color: rgb(1, 238, 20);
}


.drink-image {
  width: 64px;
  height: 64px;
}
</style>
