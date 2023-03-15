<template>

    <img :class="notShowPokemon ? 'hidden-pokemon' : 'show-pokemon'"
        :src="imgSrc"
        alt="pokemon">


</template>

<script>
export default {

    props:{
        pokemonId:{
            type: Number,
            required: true
        },
        notShowPokemon:{
            type:Boolean,
            required:true,
            default: true
        },

    },

    computed:{
        imgSrc(pokemonId){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>
    .hidden-pokemon{
        filter: brightness(0);
    }
    .show-pokemon{
        filter: none;
    }
    img{
        margin-left:70px;
    }
</style>