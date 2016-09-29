<template>
  <div id="app">
    <Hello />
    <Counter label="My Counter" />
    <Subscription />
  </div>
</template>

<script>
import Hello    from './components/Hello'
import Counter  from './components/Counter'
import Subscription from './components/Subscription'

// register components
export default {
  components: {
    Hello,
    Counter,
    Subscription
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
    max-width: 600px;
  }

</style>
