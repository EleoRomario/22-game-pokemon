import { Fighting, Flying, Ground, Normal, Poison,
  Rock, Bug, Ghost, Steel, Fire, Water, Grass,
  Electric, Psychic, Ice, Dragon, Dark, Fairy
  } from "../icons";
import { POKEMON_TYPES } from "../types/types";

export function getIconType( type:POKEMON_TYPES ){
  switch (type) {
    case "normal":
      return <Normal/>;
    case "fighting":
      return <Fighting/>;
    case "flying":
      return <Flying/>;
    case "poison":
      return <Poison/>;
    case "ground":
      return <Ground/>;
      case "rock":
      return <Rock/>;
      case "bug":
      return <Bug/>;
      case "ghost":
      return <Ghost/>;
      case "steel":
      return <Steel/>;
      case "fire":
      return <Fire/>;
      case "water":
      return <Water/>;
      case "grass":
      return <Grass/>;
      case "electric":
      return <Electric/>;
      case "psychic":
      return <Psychic/>;
      case "ice":
      return <Ice/>;
      case "dragon":
      return <Dragon/>;
      case "dark":
      return <Dark/>;
      case "fairy":
      return <Fairy/>;
    default:
  }

}