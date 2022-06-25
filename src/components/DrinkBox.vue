<template lang="html">

  <div class="drink-box" :id="`${name}`" @click="auswahl(`${name}`); $emit('select')">

    <img v-if="drinktype === 'hard'" src="@/assets/hard.png" class="drink-image" />
    <img v-if="drinktype === 'medium'" src="@/assets/beer.png" class="drink-image" />
    <img v-if="drinktype === 'soft'" src="@/assets/soft.png" class="drink-image" />
    <img v-if="drinktype === 'shot'" src="@/assets/shot.png" class="drink-image" />
    <p> {{ name }} </p>
  </div>

</template>

<script lang="js">

export default {
  name: 'drink-box',
  props: ['name', 'drinktype'],
  emits: ['select'],
  methods: {
    auswahl(name) {
      const box = document.getElementById(name).classList
      if (!box.contains("drink-box-selected")) {
        box.add("drink-box-selected")
      } else {
        box.remove("drink-box-selected")
      }
    }
  }
}

</script>

<style scoped lang="css">
.drink-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border: 2px solid;
  width: 3rem;
  height: 5rem;
  border-radius: 15px;
  transition-duration: 250ms;
  
}

.drink-box:hover {
  cursor: pointer;
}

.drink-box-selected {
  background-color: #0077b6;
}


.drink-image {
  width: 3em;
  height: 3em;
}
</style>
