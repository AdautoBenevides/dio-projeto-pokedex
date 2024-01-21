const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("id");

pokeApi.getPokemonDetailById(pokemonId)
    .then((pokemon) => {
        console.log(pokemon.photo);

        //atribui a cor do fundo do pokemon
          // Obtém a referência da div com a classe 'overlap-group'
          const overlapGroup = document.querySelector('.overlap-group');

          // Adiciona a classe correspondente ao tipo do Pokémon
          overlapGroup.classList.add(pokemon.type);

        //Atribui o nome do Pokémon 
        document.querySelector('#nome_pokemon').textContent = pokemon.name;

        // Atribui o número do Pokémon 
        document.querySelector('#nmr_pokemon').textContent = `Nº${pokemon.number}`;

        // Atribui a imagem do Pokémon 
        document.querySelector('#img_pokemon').src = pokemon.photo;

        // Atribui o peso do Pokémon
        document.querySelector('#peso_dinamico').textContent = `${pokemon.weight} kg`;

        // Atribui a altura d
        document.querySelector('#altura_dinamica').textContent = `${pokemon.height} m`;

        // Atribui a habilidade do Pokémon
        document.querySelector('#ability').textContent = pokemon.abilities[0];

        // Atribui os tipos do Pokémon
        const types = pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`);
        document.querySelector('.elementos').innerHTML = types.join('');
    })
    .catch((error) => {
        console.error("Erro ao buscar detalhes do Pokémon:", error);
    });
