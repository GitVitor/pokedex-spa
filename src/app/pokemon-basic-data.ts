import { PokemonStat } from './pokemon-stat';
import { PokemonType } from './pokemon-type';

export interface PokemonBasicData {
  name: string;
  attack: PokemonStat;
  defense: PokemonStat;
  types: PokemonType[];
  background: string;
}
