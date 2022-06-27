<template lang="html">

  <div class="stats-page">
    <h1> STATS!</h1>
    <BarChart />
  </div>

</template>

<script lang="js">
import BarChart from './BarChart.vue'

  export default  {
    name: "stats-page",
    props: [],
    mounted() {
    },
    data() {
        return {};
    },
    methods: {},
    computed: {},
    components: { BarChart }
}


</script>

<style scoped lang="css">
  .stats-page {
    display: flex;
    flex-direction: column;
    padding: 3rem;
  }
</style>
