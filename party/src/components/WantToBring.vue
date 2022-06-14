<template lang="html">

  <div class="page">
    <h1> Das bringe ich mit: </h1>
    <p> Eine Party ist teuer, daher würde ich mich freuen wenn du eine Kleinigkeit mitbringen würdest. Wähl einfach aus
      was du mitbringst. </p>
    <BringDrinksGrid @update="$emit('update2', $event)"></BringDrinksGrid>
    <div class="button-wrapper">
      <ButtonPreset type="back" @click="$emit('back')"></ButtonPreset>
      <ButtonPreset type="send" @click="$emit('senden')"></ButtonPreset>
    </div>
  </div>

</template>

<script lang="js">
import BringDrinksGrid from './BringDrinksGrid.vue'
import ButtonPreset from './ButtonPreset.vue'

export default {
  name: 'want-to-bring',
  components: {
    BringDrinksGrid,
    ButtonPreset
  }
}


</script>

<style scoped lang="css">
.page {
  width: min(90%, 30rem);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
