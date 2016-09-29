<template>
  <div id="app">
    <Hello></Hello>
    <Counter label="My Counter"></Counter>
  </div>
</template>

<script>
import Hello    from './components/Hello'
import Counter  from './components/Counter'
// register components
export default {
  components: {
    Hello,
    Counter
  }
}

</script>

<style>

  html {
    height: 100%;
    color: #000;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

</style>
