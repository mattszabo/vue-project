<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input v-model="msg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
