<template lang="html">

  <div class="drink-box" :id="`${name}`" @click="auswahl(`${name}`); $emit('select')">

    <img v-if="drinktype === 'hard'" src="@/assets/vodka.png" class="drink-image" />
    <img v-if="drinktype === 'medium'" src="@/assets/beer.png" class="drink-image" />
    <img v-if="drinktype === 'soft'" src="@/assets/soft-drinks.png" class="drink-image" />
    <p> {{ name }} </p>
  </div>

</template>

<script lang="js">

export default {
  name: 'drink-box',
  props: ['name', 'drinktype'],
  emits: ['select'],
  mounted() {

  },
  methods: {
    auswahl(name) {
      const box = document.getElementById(name).classList
      if (!box.contains("drink-box-selected")) {
        box.add("drink-box-selected")
      } else {
        box.remove("drink-box-selected")
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

.drink-box-selected {
  border-color: rgb(1, 238, 20);
}


.drink-image {
  width: 64px;
  height: 64px;
}
</style>
