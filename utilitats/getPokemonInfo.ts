import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"


export const getPokemonInfo = async (namaOrId: string) => {

    

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${namaOrId}`)

    return  {
        id: data.id,
        name: data.name,
        sprites: data.sprites

    }

}