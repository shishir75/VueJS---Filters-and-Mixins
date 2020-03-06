<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | toLowercase }}</p>
                <hr>
                <input type="text" v-model="filterText">
                <hr>
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
      name: 'App',
      data() {
          return {
              text: 'Hello there',
              fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
              filterText: ''
          }
      },
      filters: {
          toUppercase(value) {
              return value.toUpperCase();
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

<style>

</style>
