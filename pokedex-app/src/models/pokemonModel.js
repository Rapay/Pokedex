const pokemons = [
    { id: 1, nome: 'Bulbassauro', tipo: 'VegetalVeneno' },
    { id: 2, nome: 'Squirtle', tipo: 'Água' },
    { id: 3, nome: 'Charmander', tipo: 'Fogo' },
];

const getPokemons = () => pokemons;
const getPokemonsbyId = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo) => pokemons.push(pokemons.lenght+1, nome. tipo)

module.exports = { getPokemons, getPokemonsbyId, createPokemon };