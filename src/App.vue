<template>
  <div id="app">
    <Hello></Hello>
    <Counter></Counter>
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

body {
  font-family: Helvetica, sans-serif;
}
</style>
