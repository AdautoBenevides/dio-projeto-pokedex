

function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
            </li>
        `
}

const pokemonList = document.getElementById('pokemonList')



    PokeAPI.getPokemons().then((pokemons = []) => {

        // map ->Pega a lista de pokemons e transforma em uma lista de html
        // join -> Junta as listas html em uma unica string
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

    })
    .catch((error) => console.log(error))
