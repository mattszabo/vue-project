<template>
  <div class="subscription">
    <div v-for="plan in plans">
      <span> {{ plan.name }} </span>
      <span> ${{ plan.price }}/month </span>
      <button>upgrade</button>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        plans: [
          { name: 'Enterprise', price: 100 },
          { name: 'Professional', price: 50 },
          { name: 'Personal', price: 10 },
          { name: 'Free', price: 0 }
        ]
      }
    }
  }

</script>

<style scoped>
  .subscription {
    text-align: left;
  }
</style>
