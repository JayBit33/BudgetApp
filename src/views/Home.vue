<template>
  <div class="home">
    <TotalExpenses />
    <ExpenseChart />
  </div>
</template>

<script>
// @ is an alias to /src
import ExpenseChart from '@/components/ExpenseChart.vue';
import TotalExpenses from '@/components/TotalExpenses.vue';

export default {
  name: 'Home',
  components: {
    ExpenseChart,
    TotalExpenses,
  },
};
</script>
<style scoped lang="scss">
  html {
    font-size: 8px;
  }
</style>
