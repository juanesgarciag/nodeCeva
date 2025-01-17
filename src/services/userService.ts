import axios, { AxiosResponse } from "axios";
import { Rickandmorty } from "../interfaces/rick&morty.interface";

async function getCountUsers(): Promise<number> {
    try {
        const response : AxiosResponse<Rickandmorty> = await axios.get("https://rickandmortyapi.com/api/character")
        return response.data.info.count
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Error to get count users: ${error.message}`);
        }
        throw new Error('Error to get count users')        
    }
}

export async function computeResult(): Promise<number> {
    try {
        const total: number = await getCountUsers();
        return total + 20;
    } catch (error) {
        console.error('Error computing result:', error);
        if (error instanceof Error) {
            console.error('Error computing result:', error.message);
        }
        throw new Error('Failed to compute result');
    }
}