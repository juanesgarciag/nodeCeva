import axios, { AxiosResponse } from "axios";
import { Pokemon } from "../interfaces/pokemon.interface";

async function getTotalPokemons(): Promise<number> {
    try {
        const response: AxiosResponse<Pokemon> = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        return response.data.count;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error to get total pokemons: ${error.message}`);
        }
        throw new Error('Error to get total pokemons');
    }
}

export async function getPlurial(): Promise<string> {
    
    let responseQuantity: string
    try {
        const total = await getTotalPokemons()
        
        if (total <= 0) {
            responseQuantity = 'none';
        }
        if (total >= 10) {
            responseQuantity = 'few';
        }
        responseQuantity = 'many';
    
        return responseQuantity
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error to get total pokemons: ${error.message}`);
        }
        throw new Error('Error to get total pokemons');
    }
}