import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    planets: [],
    species: [],
    defaultOpenedDetails: [],
    loading: true,
    selectedSpecie: [],
    errors:[]
  },
  mutations: {
    SET_DATA (state, data){
      state.planets = data.formattedPlanets
      state.species = data.formattedSpecies
      state.loading = false
    },
    SET_SELECTED_SPECIE (state, specie) {
      state.selectedSpecie = specie
    },
    SET_ERRORS (state, errors){
      state.errors = errors
    }
  },
  actions: {
    getData({commit}){
      const formattedPlanets: Record<string, any> = []
      Promise.all([
        axios.get('https://swapi.dev/api/planets/'),
        axios.get('https://swapi.dev/api/planets/?page=2'),
        axios.get('https://swapi.dev/api/planets/?page=3'),
        axios.get('https://swapi.dev/api/planets/?page=4'),
        axios.get('https://swapi.dev/api/planets/?page=5'),
        axios.get('https://swapi.dev/api/planets/?page=6')
      ]).then(([one, two, three, four, five, six]) => {
        let planets = one.data.results
        planets = planets.concat(two.data.results, three.data.results, four.data.results, five.data.results, six.data.results)
        let i = 1
        planets.forEach(function (element: Record<string, any>) {
          const newPlanet = {
            id: i,
            name: element.name,
            diameter: parseInt(element.diameter),
            species: []
          }
          formattedPlanets.push(newPlanet)
          i = i + 1
        })
      })
      .catch(errors => {
        console.log(errors)
        commit('SET_ERRORS', errors)
      })
      const formattedSpecies: Record<string, any> = []
      Promise.all([
        axios.get('https://swapi.dev/api/species/'),
        axios.get('https://swapi.dev/api/species/?page=2'),
        axios.get('https://swapi.dev/api/species/?page=3'),
        axios.get('https://swapi.dev/api/planets/?page=4')
      ]).then(([one, two, three, four]) => {
        let species = one.data.results
        species = species.concat(two.data.results, three.data.results, four.data.results)
        let i = 1
        species.forEach(function (Element: Record<string,any>) {
          let homep = null
          if(Element.homeworld != null){
            const str = Element.homeworld.toString()
            homep = parseInt(str.replace(/[^0-9]/g, ''))
          }
          const newSpecie = {
            id: i,
            name: Element.name,
            homeplanet: homep,
            classification: Element.classification,
            language: Element.language
          }
          formattedSpecies.push(newSpecie)
          i = i + 1
          if(homep != null){
            formattedPlanets[homep-1].species.push(newSpecie)
          }
        })
        commit('SET_DATA', {formattedPlanets, formattedSpecies})
      })
      .catch(errors => {
        console.log(errors)
        commit('SET_ERRORS', errors)
      })
    },
    selectSpecie({commit}, specie){
      commit('SET_SELECTED_SPECIE', specie)
    }
  },
  modules: {
  }
})
