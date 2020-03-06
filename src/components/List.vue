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
export default {
  name: 'List',
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.toLowerCase().match(this.filterText.toLowerCase()); // case insensitive search
      });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
