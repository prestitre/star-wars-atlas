<template>
  <div class="card">
    <section>
        <header class="card-header">
          <p class="card-header-title">Planets</p>
        </header>
        <b-table
            :data="this.$store.state.planets"
            ref="table"
            :opened-detailed="this.$store.state.defaultOpenedDetails"
            detailed
            detail-key="id"
            @details-open="(row) => $buefy.toast.open(`Expanded ${row.name}`)"
            :show-detail-icon="showDetailIcon">

            <b-table-column field="name" label="Name" sortable v-slot="props">
                <template v-if="showDetailIcon">
                    {{ props.row.name }}
                </template>
                <template v-else>
                    <a @click="props.toggleDetails(props.row)">
                        {{ props.row.name }}
                    </a>
                </template>
            </b-table-column>

            <b-table-column field="data.diameter" label="Diameter" sortable numeric v-slot="props">
                {{ props.row.diameter }}
            </b-table-column>

            <template #detail="props">
                    <div>
                        <div>
                            <div v-for="specie in props.row.species" :key="specie.id">
                              <b-button @click="sendName" tag="router-link" :to="{ path: '/specie'}">{{specie.name}}</b-button>
                            </div>
                        </div>
                    </div>
            </template>
        </b-table>

    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'PlanetTable',
  props: {
    msg: String,
  },
  data() {
    return {
      showDetailIcon: true
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
