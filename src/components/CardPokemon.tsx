import { useEffect, useState } from "react"
import { getPokemon } from "../libs/getPokemon"

export const CardPokemon = () => {

  const [currentPokemon, setCurrentPokemon] = useState(null)

  useEffect(() => {
    const updatePokemon = async () => {
      const pokemon = await getPokemon()
      setCurrentPokemon(pokemon)
    }
    updatePokemon()
  }, [])

  return (
    <div>
      <code>
        {JSON.stringify(currentPokemon, null, 2)}
      </code>
    </div>
  )
}