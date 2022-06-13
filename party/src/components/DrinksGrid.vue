<template lang="html">

  <div class="drinks-grid">
    <DrinkBox class="drinks-grid-item" v-for="drink in drinks" :key="drink.id" :name="drink.name"
      :imgsource="drink.imagesrc" />
  </div>

</template>

<script lang="js">
import DrinkBox from './DrinkBox.vue';

export default {
  name: 'drinks-grid',
  props: [],
  components: {
    DrinkBox
  },
  mounted() {

  },
  data() {
    return {
      drinks: [
        { id: 1, name: 'Vodka', imagesrc: 'vodka.png' },
        { id: 2, name: 'Bacardi', imagesrc: 'vodka.png' },
        { id: 3, name: 'Bier', imagesrc: 'vodka.png' },
        { id: 4, name: 'Wasser', imagesrc: 'vodka.png' }
      ],
      selected: []
    }
  },
  methods: {

  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.drinks-grid {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>
