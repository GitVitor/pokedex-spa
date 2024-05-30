import { Component, Input, OnInit } from '@angular/core';
import { PokemonBasicData } from '../pokemon-basic-data';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonData!: PokemonBasicData;
  @Input() index!: number;
  mainType!: string;
  ngOnInit(): void {
    this.mainType = this.pokemonData.types[0].type.name;
  }
}
