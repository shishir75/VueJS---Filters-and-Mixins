<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | toLowercase }}</p>
                <hr>
                <input type="text" v-model="filterText">
                <hr>
                <ul v-if="filterText != '' ">
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>

                <hr>

                <app-list></app-list>

            </div>
        </div>
    </div>
</template>

<script>
  import List from "./components/List"; // as default import/export , no {} needed
  import { fruitMixins } from './fruitMixins';  // named import/export, that's why using {}

  export default {
      name: 'App',
      data() {
          return {
              text: 'Hello there',
          }
      },
      filters: {
          toUppercase(value) {
              return value.toUpperCase();
          }
      },
      components: {
          appList: List,
      },
      mixins: [ fruitMixins ]

  }
</script>

<style>

</style>
