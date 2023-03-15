import pokemonApi from "@/api/pokemonApi";

//Generar números random

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Almacenar 4 números de los aleatorios generados
function getFourRandom() {
    let pokemons = []
    for (let i = 0; i < 4; i++) {
        let pokemon = getRandomInt(1, 650)
        do {
            pokemon = getRandomInt(1, 650)
        } while (pokemons.includes(pokemon))
        pokemons.push(pokemon)
    }
    return pokemons
}
//
const getPokemonsOptions = async() => {
    let pokemones = getFourRandom()
    const pokemonNames = await getPokemonsNames(pokemones)

    console.table(pokemonNames)

    return pokemonNames

}

const getPokemonsNames = async([a,b,c,d]=[]) =>{

    const Promises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [p1, p2, p3, p4] = await Promise.all(Promises)

    return [
        {name: p1.data.name, id:p1.data.id},
        {name: p2.data.name, id:p2.data.id},
        {name: p3.data.name, id:p3.data.id},
        {name: p4.data.name, id:p4.data.id}
    ]

}

console.log(getPokemonsOptions())


export default getPokemonsOptions


