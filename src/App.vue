<template>
  <Layout>
      <div slot="header" class="header">
        <h2>Budget app</h2>
      </div>
      <FooterActions slot="footer"></FooterActions>
  </Layout>
</template>
<script>
import Layout from '@/components/Layout.vue';
import FooterActions from '@/components/FooterActions.vue';

export default {
  components: {
    Layout,
    FooterActions,
  },
};
</script>
<style lang="scss">
body {
  background-color: #ffffff;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  background:#42b983;
  color: white;
  padding: 1rem 0;
}
</style>
