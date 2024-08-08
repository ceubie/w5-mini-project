const urlParams = new URLSearchParams(window.location.search);
const pokemonId = 150;

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(data => {
        const detailsDiv = document.getElementById('pokemon-details');
        detailsDiv.innerHTML = `
            <div class="col-md-6">
                <div class="card">
                    <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">ID: ${data.id}</p>
                        <p class="card-text">Height: ${data.height}</p>
                        <p class="card-text">Weight: ${data.weight}</p>
                        <p class="card-text">Type: ${data.types.map(type => type.type.name).join(', ')}</p>
                        <p class="card-text">Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                    </div>
                </div>
            </div>
        `;
    })
    .catch(error => {
        const detailsDiv = document.getElementById('pokemon-details');
        detailsDiv.innerHTML = `<div class="col-12"><p class="text-danger">Pokémon details not found!</p></div>`;
    });
