<template>
  <div id="app">
    <b-navbar transparent class="is-black">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/'}">
          <h1><strong class="has-text-light">Star Wars Atlas</strong></h1>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'app',
  mounted() {
    this.$store.dispatch('getData')
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:black;
}
body{
  background-color: black;
  height: 100%;
  width: 100%;
}
.is-black{
  font-size: 180%;
}

</style>
