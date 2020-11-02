<template>
<div id="app">
  <slot name="header"></slot>
    <router-view/>
  <slot name="footer"></slot>
</div>
</template>
<script>

export default {
  name: 'Layout',
  components: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">

</style>
