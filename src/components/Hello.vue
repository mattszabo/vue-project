<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="msg">
  </div>
</template>

<script>
  export default {
    // vue expects a 'data' object
    data () {
      return {
        msg: 'Hello Vue!'
      }
    }
  }
</script>
