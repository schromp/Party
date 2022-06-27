<template lang="html">

    <div class="page">
        <h1> Das möchte ich trinken: </h1>
        <p> Damit ich bescheid weiß wie viel Alkohol gebraucht wird und was ich kaufen soll klick bitte einmal alle
            Getränke an, die du trinken würdest. </p>
        <DrinksGrid @update="$emit('update1', $event)"></DrinksGrid>
        <div class="button-wrapper">
            <ButtonPreset type="back" @click="$emit('back')"></ButtonPreset>
            <ButtonPreset type="weiter" @click="$emit('weiter')"></ButtonPreset>
        </div>

    </div>

</template>

<script lang="js">
import DrinksGrid from './DrinksGrid.vue'
import ButtonPreset from './ButtonPreset.vue'

export default {
    name: 'want-to-drink',
    components: {
        DrinksGrid,
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