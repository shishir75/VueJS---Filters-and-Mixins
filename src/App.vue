<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase }}</p>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
      name: 'App',
      data() {
          return {
              text: 'Hello there'
          }
      },
      filters: {
          toUppercase(value) {
              return value.toUpperCase();
          }
      }

  }
</script>

<style>

</style>
