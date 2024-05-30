import { Component, Input } from '@angular/core';
import { PokemonBasicData } from '../pokemon-basic-data';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  @Input() PokemonList: PokemonBasicData[] = [];
  @Input() isLoading: boolean = true;
}
