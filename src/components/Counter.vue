<!-- <div class="counter" v-bind:class=[ {{count}} < 0 ? redCount : '']> -->
<template>
  <div class="counter">
    <h1> {{ label }}</h1>
    <p v-bind:class="[count >= 0 ? 'pos-count' : 'neg-count']"> {{ count }} </p>
    <button @click="increment(step)">+</button>
    <button @click="decrement(step)">-</button>
    <input v-model="step"></input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
        step: 1
      }
    },
    methods: {
      increment(step) {
        this.count += Number(step);
      },
      decrement(step) {
        this.count -= Number(step);
      }
    },
    props: {
      label: {
        default: 'New Counter',
        type: String
      }
    }
  }
</script>

<style scoped>
  .neg-count {
    color: #F00;
  }
  .pos-count {
    color: #000;
  }
</style>
