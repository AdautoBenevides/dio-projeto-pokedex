document.addEventListener('DOMContentLoaded', function () {
    console.log('Script main.js carregado.');

    const pokemonList = document.getElementById('pokemonList');
    const loadMoreButton = document.getElementById('loadMoreButton');

    const maxRecords = 151;
    const limit = 10;
    let offset = 0;

    function convertPokemonToLi(pokemon) {
        const listItem = document.createElement('li');
        listItem.classList.add('pokemon', pokemon.type);
        listItem.innerHTML = `
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        `;

        listItem.addEventListener('click', () => showDetails(JSON.stringify(pokemon)));

        return listItem;
    }

    function loadPokemonItens(offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newItems = pokemons.map(convertPokemonToLi);
            newItems.forEach((item) => pokemonList.appendChild(item));
        });
    }

    function handleLoadMoreClick() {
        offset += limit;
        const qtdRecordsWithNextPage = offset + limit;

        if (qtdRecordsWithNextPage >= maxRecords) {
            const newLimit = maxRecords - offset;
            loadPokemonItens(offset, newLimit);
            loadMoreButton.parentElement.removeChild(loadMoreButton);
        } else {
            loadPokemonItens(offset, limit);
        }
    }

    function showDetails(pokemon) {
        const parsedPokemon = JSON.parse(pokemon);

        console.log(parsedPokemon);
        const pokemonId = parsedPokemon.number;
    
        console.log(pokemonId);
    
        if (pokemonId) {
            // Redireciona para a página de detalhes com os dados do Pokémon
            window.location.href = `../infoPokemon.html?id=${pokemonId}`;
        } else {
            console.error("Detalhes inválidos do Pokémon:", pokemon);
            // Exiba uma mensagem de erro ou faça algo apropriado para lidar com a situação
        }
    }
    

    loadPokemonItens(offset, limit);

    loadMoreButton.addEventListener('click', handleLoadMoreClick);
});
