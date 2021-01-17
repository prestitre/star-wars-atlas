<template>
  <div>
    <div class="back-button">
      <b-button icon-left="arrow-left" tag="router-link" :to="{ path: '/'}">Back to Planets table</b-button>
    </div>
    <SpecieInfo />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import SpecieInfo from '@/components/SpecieInfo.vue';

export default Vue.extend({
  name: 'Specie',
  components: {
    SpecieInfo,
  },
})
</script>
<style scoped>
  .back-button {
    float: left;
  }

</style>
