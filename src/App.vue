<template>
  <div id="app">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/'}">
          <h1><strong>Star Wars Encyclopedia</strong></h1>
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
    this.$store.dispatch('getPlanets')
    this.$store.dispatch('getSpecies')
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
}

</style>
