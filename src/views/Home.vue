<template>
  <div class="home">
    <PlanetTable msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PlanetTable from '@/components/PlanetTable.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    PlanetTable,
  },
});
</script>
