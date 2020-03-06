<template>
    <div>
      <h1>Mixins</h1>

      <input type="text" v-model="filterText">
      <hr>
      <ul>
        <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
      </ul>
    </div>
</template>

<script>
    import { fruitMixins } from '../fruitMixins';
    export default {
        name: 'List',
        mixins: [ fruitMixins ]


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
