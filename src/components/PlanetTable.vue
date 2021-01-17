<template>
  <div class="container">
    <div class="card">
      <section>
          <header class="card-header">
            <p class="card-header-title has-text-warning">Planets</p>
          </header>
          <b-table
              class="myTable has-backgroud-color-dark"
              :data="this.$store.state.planets"
              :loading="this.$store.state.loading"
              ref="table"
              :opened-detailed="this.$store.state.defaultOpenedDetails"
              detailed
              detail-key="id"
              @details-open="(row) => $buefy.toast.open(`Expanded ${row.name}`)"
              :show-detail-icon='showDetailIcon'
              >

              <b-table-column field="name" label="Name" sortable v-slot="props">
                  <template v-if="props.row.species.length === 0">
                      {{ props.row.name }}
                  </template>
                  <template v-else>
                      <b-icon 
                        icon="account"
                        type="is-primary">
                      </b-icon>
                      <a @click="props.toggleDetails(props.row)">
                          {{ props.row.name }}
                      </a>
                  </template>
              </b-table-column>

              <b-table-column field="diameter" label="Diameter" sortable numeric v-slot="props">
                  {{ props.row.diameter }}
              </b-table-column>

              <template #detail="props">
                      <div>
                          <div>
                              <div v-for="specie in props.row.species" :key="specie.id">
                                <b-button @click="openSpecie(specie)" type="is-warning" inverted >{{specie.name}}</b-button>
                              </div>
                          </div>
                      </div>
              </template>
          </b-table>

      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'PlanetTable',
  data() {
    return {
      showDetailIcon: false
    }
  },
  methods:{
    openSpecie(specie: Record<string, any>){
      this.$store.dispatch('selectSpecie', specie)
      this.$router.push('specie')
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    padding: 2%;
  }
  .card{
    background-color:black;
    border-style: solid;
    border-color: yellow;
    border-width: 3px;
  }
  .card-header{
    border-style: solid;
    border-width: 1px 1px 4px 1px;
    border-color: yellow;
  }
  .planet-table{
    border-style: solid;
    border-color: yellow;
  }

</style>