<template>
  <div class="add-expense">
    <h1>Add Expense</h1>

    <form>
      <label>Expense Name:</label>
      <input type="text" placeholder="Tv and Internet" />
      <label>Expense Category:</label>
      <select name="expenses">
        <optgroup label="Fixed">
          <option value="rent">Rent</option>
          <option value="utility">Utility Bill</option>
          <option value="food">Food</option>
          <option value="gas">Gas</option>
        </optgroup>
        <optgroup label="Variable">
          <option value="entertainment">Entertainment</option>
          <option value="want">Want</option>
          <option value="need">Need</option>
        </optgroup>
      </select>
      <label>Date:</label>
      <input type="date" class="date" />
      <label>Amount:</label>
      <input type="text" placeholder="0.00" />
      <span class="recurring">
        <input type="checkbox" id="recurring" :checked="false" />
        <label for="recurring">Recurring</label>
      </span>
      <button type="submit" class="add_btn" style="float:right">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Categories',
};
</script>

<style scoped lang="scss">
  .add-expense {

    margin: 3rem 8rem 0 8rem;
    padding: 1rem;

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      label {
        font-weight: 700;
        text-align: left;
        margin: .5rem 0;
      }

      input, select {
        padding: .5rem;
      }

      .recurring {
        text-align: left;
        margin-top: .75rem;
      }

      .add_btn {
        background-color: #42b983;
        color: white;
        font-size: 1rem;
        padding: .25rem;
        width: 140px;
        margin-top: .75rem;
        position: absolute;
        right: 9rem;
        top: 37rem;
      }
    }
  }
</style>
