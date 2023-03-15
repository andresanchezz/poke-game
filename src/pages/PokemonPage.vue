<template>

    <h2 v-if="!pokemon">Cargando...</h2>

    <div v-else>
    <h1>¿Quién es este pokemón?</h1>

    <!--Img-->
        <PokemonImg :pokemonId="pokemon.id" :notShowPokemon="notShowThePokemon" />
    <!----Opciones-->
    <PokemonOptions  :pokeNames="pokemonesArray" @selected="checkAnswer"/>
</div>

    <h2>{{ msg }}</h2>

</template>

<script>

import PokemonImg from '@/components/PokemonImg.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getOptionsPokemon from '@/helpers/getOptionsPokemon'

export default {
    components: { PokemonOptions, PokemonImg },
    data(){
        return{
            pokemonesArray:[],
            pokemon: null,
            notShowThePokemon: true,
        }
    },
    methods:{
        async getNamesPoke(){

            this.pokemonesArray = await getOptionsPokemon()
            const randomP = Math.floor(Math.random()*4)
            this.pokemon = this.pokemonesArray[randomP]

        },
        checkAnswer(id){

            this.notShowThePokemon = false;
            
            if(id === this.pokemon.id){
                this.msg='Correcto'
            } else {
                this.msg = `Incorrecto, era ${this.pokemon.name}`
            }

        }
    },
    mounted(){
        this.getNamesPoke()
    }
    
}
</script>


