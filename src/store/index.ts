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
    pickedSpecie: [],
    errors:[]
  },
  mutations: {
    SET_PLANETS (state, planets){
      state.planets = planets
    },
    SET_SPECIES (state, species){
      state.species = species
    },
    SET_ERRORS (state, errors) {
      state.errors = errors
    },
    SET_LOADING (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    getPlanets({commit}){
      const formattedPlanets = []
      Promise.all([
        axios.get('https://swapi.dev/api/planets/'),
        axios.get('http://swapi.dev/api/planets/?page=2'),
        axios.get('http://swapi.dev/api/planets/?page=3'),
        axios.get('http://swapi.dev/api/planets/?page=4'),
        axios.get('http://swapi.dev/api/planets/?page=5'),
        axios.get('http://swapi.dev/api/planets/?page=6')
      ]).then(([one, two, three, four, five, six]) => {
        let planets = one.data.results
        planets = planets.concat(two.data.results, three.data.results, four.data.results, five.data.results, six.data.results)
        let i = 1
        planets.forEach(element => {
          console.log(element)
          const newPlanet = {
            id: i,
            name: element.name,
            diameter: parseInt(element.diameter),
            species: []
          }
          formattedPlanets.push(newPlanet)
          i = i + 1
        })
        console.log(formattedPlanets)
        commit('SET_PLANETS', formattedPlanets)
      })
      .catch(errors => {
        console.log(errors)
      })
      commit('SET_LOADING', false)
    },
    getSpecies({commit}){
      const formattedSpecies = []
      Promise.all([
        axios.get('https://swapi.dev/api/species/'),
        axios.get('http://swapi.dev/api/species/?page=2'),
        axios.get('http://swapi.dev/api/species/?page=3'),
        axios.get('http://swapi.dev/api/planets/?page=4')
      ]).then(([one, two, three, four]) => {
        let species = one.data.results
        species = species.concat(two.data.results, three.data.results, four.data.results)
        let i = 1
        species.forEach(element => {
          let homep = null
          if(element.homeworld != null){
            const str = element.homeworld.toString()
            homep = parseInt(str.replace(/[^0-9]/g, ''))
          }
          const newSpecie = {
            id: i,
            name: element.name,
            homeplanet: homep,
            classification: element.classification,
            language: element.language
          }
          formattedSpecies.push(newSpecie)
          i = i + 1
        });
        console.log(formattedSpecies)
        commit('SET_SPECIES', formattedSpecies)
      })
      .catch(errors => {
        console.log(errors)
        commit('SET_ERRORS', errors)
      })

    }
  },
  modules: {
  }
})
