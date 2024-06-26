import { PokemonStat } from './pokemon-stat';
import { PokemonType } from './pokemon-type';

export interface PokemonDetailsData {
  name: string;
  attack: PokemonStat;
  defense: PokemonStat;
  specialDefense: PokemonStat;
  specialAttack: PokemonStat;
  types: PokemonType[];
  background: string;
  pokedexEntryDescription: string;
}
