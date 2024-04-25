import { usePokemon } from "../hooks/usePokemon"
import { Balance, Rule } from "../icons"
import { TagTypePokemon } from "./TagTypePokemon"

export const CardPokemon = () => {

  const {isLoading, pokemon, error} = usePokemon()

  return (
    <section className="w-96 h-auto bg-accent rounded-3xl p-10 pb-0">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {pokemon && (
          <div className="flex text-white flex-col items-center justify-center -translate-y-16 gap-4">
          <img src={pokemon.img} alt={pokemon.name} className="w-64" />
          <p className="font-bold opacity-20"># {pokemon.order.toString().padStart(4,'0')}</p>
          <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
          <TagTypePokemon type={pokemon.type} typeEs={pokemon.typeEs}/>
          <p className="text-pretty text-xs text-gray-400">{pokemon.about}</p>
          <div className="grid grid-cols-2 w-full justify-items-center">
            <div className="flex flex-col gap-2 items-center">
              <span className="flex gap-2">
                <Balance className="text-gray-500"/>
                {pokemon.weight}kg
              </span>
              <span className="text-xs text-gray-700">Peso</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="flex gap-2">
                <Rule className="text-gray-500"/>
                {pokemon.height}m
              </span>
              <span className="text-xs text-gray-700">Altura</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}