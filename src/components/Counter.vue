<!-- <div class="counter" v-bind:class=[ {{count}} < 0 ? redCount : '']> -->
<template>
  <div class="counter">
    <h1> {{ label }}</h1>
    <p v-bind:class="[count >= 0 ? 'pos-count' : 'neg-count']"> {{ count }} </p>
    <button @click="increment(step)">+</button>
    <button @click="decrement(step)">-</button>
    <p>Step value:
      <input v-model="step" />
    </p>
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
  .counter {
    border: 1px solid black;
    margin: 15px;
  }
  .neg-count {
    color: #F00;
  }
  .pos-count {
    color: #000;
  }
</style>
