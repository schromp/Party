<template lang="html">

  <div class="drinks-grid">
    <!-- <DrinkBox class="drinks-grid-item" v-for="drink in drinks" :key="drink.id" :name="drink.name"
      :imgsource="drink.imagesrc" :id="drink.name" @select="selectDrink(drink.name)" /> -->

    <DrinkBox class="drinks-grid-item" v-for="(drink, index) in data" :key="index" :name="drink.name" :drinktype="drink.type"/>
    <CreateDrinkBox class="drinks-grid-item"></CreateDrinkBox>
  </div>

</template>

<script lang="js">
import DrinkBox from './DrinkBox.vue';
import CreateDrinkBox from './CreateDrinkBox.vue'
import { supabase } from '../supabase'
import { ref } from 'vue';

export default {
  name: 'drinks-grid',
  props: [],
  components: {
    DrinkBox,
    CreateDrinkBox
  },
  setup() {
    const data = ref([])
    const dataLoaded = ref(null)
    const getDrinks = async () => {
      try {
        const { data: drinks, error } = await supabase.from('drinks').select('*')
        if (error) throw error
        data.value = drinks
        dataLoaded.value = true
      } catch (error) {
        console.warn(error.message)
      }
    }

    getDrinks()

    return { data, dataLoaded }
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
  computed: {

  },
  methods: {
    selectDrink(drink) {
      if (!this.selected.includes(drink)) {
        this.selected.push(drink)
      } else {
        //convert selected to array damit indexOf arbeiten kann
        const set = new Set(this.selected)
        const index = Array.from(set).indexOf(drink)

        this.selected.splice(index, 1)
      }
    }
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
