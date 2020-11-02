<template>
  <div class="footer-actions">
    <ul class="footer-actions__options">
      <li>
        <router-link to="/">
          <font-awesome-icon icon="home" class="icon"/>
          <h4>Home</h4>
        </router-link>
      </li>
      <li>
        <font-awesome-icon icon="calendar-alt" class="icon"/>
        <h4>Timeline</h4>
      </li>
      <li>
        <router-link to="/add">
          <font-awesome-icon icon="plus-circle" class="icon plus-icon" />
        </router-link>
      </li>
      <li>
        <font-awesome-icon icon="money-bill-wave" class="icon"/>
        <h4>Budget</h4>
      </li>
      <li>
        <font-awesome-icon icon="chart-line" class="icon"/>
        <h4>Chart</h4>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'FooterActions',
  props: {
    msg: String,
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
  .footer-actions {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    text-align:center;
    background-color: white;
    border-top: 1px solid #dad4d4;
    padding-top: 1.75rem;

    &__options {
      list-style: none;
      display: flex;
      margin: 0 4rem;
      padding: 0;
      justify-content: space-between;

      li {
        cursor: pointer;

        h4 {
          margin-top: .5rem;
        }
      }
    }
    .icon {
      font-size: 2rem;

      &:focus {
        color: black;
      }
    }
    .plus-icon {
      font-size: 4rem;
      color: #42b983;
    }
    a:active, a:visited {
      color: #2c3e50;
      text-decoration: none;
    }
  }
</style>
