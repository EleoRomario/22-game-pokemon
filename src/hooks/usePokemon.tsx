import { useQuery } from '@tanstack/react-query'
import { fetchPokemon } from '../libs/fetchPokemon'
import { useEffect, useState } from 'react'
import { POKEMON } from '../types/types'

export const usePokemon = () => {
  const { isLoading, data, error } = useQuery({
    queryKey:['pokemon'], 
    queryFn:fetchPokemon
  })

  const [pokemon, setPokemon] = useState<POKEMON|null>(null)

  useEffect(() => {
    if(data) {
      setPokemon(data)
    }
  }, [data])

  return {pokemon,isLoading,error}
}