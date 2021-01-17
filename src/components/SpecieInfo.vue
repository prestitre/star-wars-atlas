<template>
    <div class="container">
        <div class="card">
            <div class="card-header"> 
                <header class="card-header">
                    <p class="card-header-title has-text-light">Specie</p>
                </header>
            </div>
            <div class="card-image">
                <figure class="image is-1by1">
                    <img src="@/assets/Profile_avatar_placeholder_large.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="content">
                <p><strong class="has-text-light">Name:</strong> &nbsp;{{this.$store.state.selectedSpecie.name}}</p>
                <p><strong class="has-text-light">Homeplanet:</strong> &nbsp;{{this.$store.state.planets[this.$store.state.selectedSpecie.homeplanet-1].name}}</p>
                <p><strong class="has-text-light">Classification:</strong> &nbsp;{{this.$store.state.selectedSpecie.classification}}</p>
                <p><strong class="has-text-light">Language:</strong> &nbsp;{{this.$store.state.selectedSpecie.language}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        flex-direction: row;
        padding-top: 4%;
        padding-bottom: 8%;
    }
    .card{
        border-style: solid;
        border-color: yellow;
        background-color: black;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 480px;
    }
    .card-header{
        color: yellow;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 120%;
    }
    .card-image{
        border-style: solid;
        border-color: yellow;
        padding-left: 8%;
        padding-right: 8%;
        padding-top: 4%;
        padding-bottom: 8%;
    }
    .content{
        padding-top: 4%;
        padding-bottom: 4%;
        color: yellow;
    }

</style>