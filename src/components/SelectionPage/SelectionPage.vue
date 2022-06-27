<template>
  <div id="selection-page">
    <p> <router-link to="stats"> Statspage </router-link> </p>
    <InfoBox v-show="step == 0" @weiter="name = $event; weiter()"></InfoBox>
    <WantToDrink v-show="step == 1" @weiter="weiter()" @back="back()" @update1="selectedDrinks = $event" />
    <WantToBring v-show="step == 2" @senden="senden()" @back="back()" @update2="bringsDrinks = $event"></WantToBring>
    <FinishedPage v-show="step == 3" />
  </div>
</template>

<script>
import WantToDrink from './WantToDrink.vue';
import InfoBox from './InfoBox.vue';
import WantToBring from './WantToBring.vue';
import FinishedPage from './FinishedPage.vue';
import { supabase } from '@/supabase';

export default {
  name: 'selection-page',
  components: {
    WantToDrink,
    InfoBox,
    WantToBring,
    FinishedPage
  },
  data() {
    return {
      step: 0,
      name: '',
      selectedDrinks: '',
      bringsDrinks: '',
      worked: false
    }
  },
  methods: {
    weiter() {
      this.step++
      window.scrollTo(0, 0)
    },
    back() {
      this.step--
      window.scrollTo(0, 0)
    },
    async senden() {
      this.step = 3
      const { data, error } = await supabase
        .from('Voters')
        .insert([
          { votername: this.name, selectedDrinks: this.selectedDrinks, bringsDrinks: this.bringsDrinks },
        ])
      console.log(data, error)
      if (data, error) this.worked = true
    }
  }
}
</script>

<style lang="css">
html,
body {
  margin: 0;
  padding: 0;
  background-color: #90e0ef;
}

#selection-page {

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
