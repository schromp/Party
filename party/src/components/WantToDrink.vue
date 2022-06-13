<template lang="html">

    <div class="page">
        <input id="nameinput" type="text" placeholder="Name:">
        <DrinksGrid></DrinksGrid>
        <button id="weiter"> Weiter </button>
    </div>

</template>

<script lang="js">
import DrinksGrid from './DrinksGrid.vue'

export default {
    name: 'want-to-drink',
    components: {
        DrinksGrid
    }
}
</script>

<style scoped lang="css">
.page {
    width: fit-content;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
}

#weiter {
    width: 150px;
    height: 30px;
    margin: 20px;
    background-color: white;
    border: 2px solid;
    border-radius: 6px;
}

#weiter:hover {
    cursor: pointer;
}

#nameinput {
    margin: 20px;
    box-sizing: border-box;
    padding: 12px 20px;
    width: 400px;
    height: 30px;
    border: 2px solid;
    border-radius: 6px;
}

#nameinput:focus {
    outline: none;
}
</style>