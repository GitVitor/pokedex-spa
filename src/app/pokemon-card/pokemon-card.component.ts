import { Component, Input } from '@angular/core';
import { PokemonBasicData } from '../pokemon-basic-data';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input() pokemonData!: PokemonBasicData;
}
