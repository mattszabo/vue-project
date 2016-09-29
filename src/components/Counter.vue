<template>
  <div class="counter">
    <h1> {{ label }}</h1>
    <p> {{ count }} </p>
    <button @click="increment(step)">+</button>
    <button @click="decrement(step)">-</button>
    <input v-model="step" number></input>
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
