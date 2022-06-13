<template lang="html">

  <div class="create-drink-box">
    <img src="@/assets/addcircle.png" class="addimg">
    <p> Erstellen </p>
  </div>

</template>

<script lang="js">

export default {
  name: 'create-drink-box',
  props: [],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.create-drink-box {
  padding: 20px;
  border: 2px solid;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  transition-duration: 250ms;
}

.create-drink-box:hover {
  cursor: pointer;
}

.addimg {
  width: 64px;
  height: 64px;
}
</style>
