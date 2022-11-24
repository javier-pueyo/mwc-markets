import Axios from "axios";

const useApi = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const fetchApi = async (url) => {
        try {
            const pokemon = await Axios.get(url);
            const {id, name, weight, height, types, sprites} = pokemon.data;
            const newPokemon = {
                id, 
                name, 
                weight, 
                height, 
                types, 
                sprites
            }
            return newPokemon;
        } catch (error) {
        console.error('error', error);
        }
    }

    return {
            fetchApi
    };
}

export default useApi;