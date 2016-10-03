<template>
  <div>
    <span> {{ plan.name }} </span>
    <span> {{ plan.price }}/month </span>
    <button @click="setActivePlan(plan)"
            v-if="plan.name !== active.name"
    >
      {{ isUpgrade ? 'Upgrade' : 'Downgrade' }}
    </button>
    <span class="selected" v-else>
      Selected
    </span>
  </div>
</template>

<script>
  export default {
    props: [
      'plan',
      'active',
      'setActivePlan'
    ],
    computed: {
      isUpgrade: function() {
        return this.plan.price > this.active.price;
      }
    }
  }
</script>

<style scoped>
  .selected {
    color: #FF0000;
  }
</style>
