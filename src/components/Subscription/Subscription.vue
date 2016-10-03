<template>
  <div class="subscription">
    <pre>
      {{ $data }}
    </pre>
    <div v-for="plan in plans">
      <Plan
        :plan="plan"
        :setActivePlan="setActivePlan"
        :active="active"
      />
    </div>
  </div>
</template>

<script>
  import Plan from './Plan';
  export default {
    data() {
      return {
        plans: [
          { name: 'Enterprise', price: 100 },
          { name: 'Professional', price: 50 },
          { name: 'Personal', price: 10 },
          { name: 'Free', price: 0 }
        ],
        active: {}
      }
    },
    components: {
      Plan
    },
    methods: {
      setActivePlan: function(plan) {
        this.active = plan;
      }
    }
  }
</script>

<style scoped>
  .subscription {
    text-align: left;
  }
</style>
