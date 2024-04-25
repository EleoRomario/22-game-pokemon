import { useEffect, useState } from "react";
import { getType } from "../helpers/getType";
import { POKEMON_TYPES } from "../types/types";

interface TAG{
  type: POKEMON_TYPES[],
  typeEs: string[]
}
export const TagTypePokemon = ({type,typeEs}:TAG) => {

  const [types, setTypes] = useState<{color:string,typeEs:string, icon:JSX.Element | undefined}[]>([]);

  useEffect(() => {
    const typeFormat = () => {
      return type.map((type,index) => {
        const typePokemon = getType(type)
        console.log(typeEs[index])
        return {...typePokemon, typeEs: typeEs[index]}      
      })
    }
    const format = typeFormat()
    setTypes(format)

  }, [type,typeEs])

  return (
    <div className="flex flex-wrap gap-2">
      {types.map(({color,typeEs, icon},index) => (
        <span key={index} className="flex justify-center items-center gap-1 text-white rounded-lg px-2 py-1 text-xs font-semibold mr-2" style={{
          color,
          border: `1px solid ${color}`
        }}>
          {icon}
          {typeEs}
        </span>
      ))}
    </div>
  )
}