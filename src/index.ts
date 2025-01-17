import { computeResult } from "./services/userService"
import { getPlurial } from "./services/pokemonService"

(async () => {
    const result: number = await computeResult()
    console.log(`The count + 20 is ${result}`)

    const pokemons: string = await getPlurial()
    console.log(`There are ${pokemons} pokemons`)
})()