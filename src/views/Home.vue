<template>
  <div class="home">
    <PlanetTable />
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
