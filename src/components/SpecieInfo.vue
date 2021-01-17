<template>
    <div class="card">
        <div class="card-header"> 
            <header class="card-header">
                <p class="card-header-title">Specie</p>
            </header>
        </div>
        <div class="card-image">
            <figure class="image is-128x128">
                <img src="@/assets/Profile_avatar_placeholder_large.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="content">
            <p><strong>Name:</strong> &nbsp;{{this.$store.state.selectedSpecie.name}}</p>
            <p><strong>Homeplanet:</strong> &nbsp;{{this.$store.state.planets[this.$store.state.selectedSpecie.homeplanet-1].name}}</p>
            <p><strong>Classification:</strong> &nbsp;{{this.$store.state.selectedSpecie.classification}}</p>
            <p><strong>Language:</strong> &nbsp;{{this.$store.state.selectedSpecie.language}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style scoped>

</style>