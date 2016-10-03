<template>
  <div class="counter">
    <h1> {{ label }}</h1>
    <p v-bind:class="countClass"> {{ count }} </p>
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
    computed: {
      countClass: function() {
        if(this.count < 0) {
          return 'neg-count';
        } else {
          return 'pos-count';
        }
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
    padding: 20px;
  }
  .neg-count {
    color: #F00;
  }
  .pos-count {
    color: #000;
  }
</style>
