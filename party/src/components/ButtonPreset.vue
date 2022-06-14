<template lang="html">

  <div class="button-preset">
    <button v-if="type === 'weiter'" class="btn" id="weiter"> Weiter </button>
    <button v-if="type === 'send'" class="btn" id="send"> Absenden </button>
    <button v-if="type === 'back'" class="btn" id="back"> Zurück </button>
  </div>

</template>

<script lang="js">

export default {
  name: 'button-preset',
  props: ['type'],
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
.btn {
  width: 10em;
  height: 2em;
  margin: 0.5em 1em;
  background-color: transparent;
  border: 2px solid;
  border-radius: 6px;
}

.btn:hover {
  cursor: pointer;
}
</style>
