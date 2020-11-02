<template>
  <div class="total-expenses">
    <h1 class="total-expenses__total">{{ total | currency }}</h1>
    <h2 class="total-expenses__heading">Total Expenses</h2>
  </div>
</template>

<script>
export default {
  name: 'TotalExpenses',
  data() {
    return {
      total: 1300.23,
    };
  },
  props: {

  },
  filters: {
    currency(value) {
      return `-$${value}`;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$grey-light: #a19d9dd3;
  .total-expenses {
    margin-bottom: 11rem;
    &__heading {
      color: $grey-light;
      margin-left: .5rem
    }
  }
</style>
