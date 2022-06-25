<template lang="html">

  <div class="drinks-grid">
    <DrinkBox v-for="(drink, index) in data" :key="index" :name="drink.name"
      :drinktype="drink.type" @select="selectDrink(drink.id)" />
  </div>

</template>

<script lang="js">
import DrinkBox from './DrinkBox.vue';
import { supabase } from '../supabase'
import { ref } from 'vue';

export default {
  name: 'drinks-grid',
  props: [],
  components: {
    DrinkBox,
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
      selected: []
    }
  },
  computed: {

  },
  methods: {
    selectDrink(drink) {
      if (!this.selected.includes(drink)) {
        this.selected.push(drink)
        this.$emit('update', this.selected)
      } else {
        //convert selected to array damit indexOf arbeiten kann
        const set = new Set(this.selected)
        const index = Array.from(set).indexOf(drink)

        this.selected.splice(index, 1)
        this.$emit('update', this.selected)
      }
    }
  }
}


</script>

<style scoped lang="css">
.drinks-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-content: center;

  padding-block: 2rem;
  width: min(90%, 30rem);
  margin-inline: auto;

}
</style>
