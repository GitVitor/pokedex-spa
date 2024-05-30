import { Component, output, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMainHeaderComponent } from './app-main-header/app-main-header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { InputFilterComponent } from './input-filter/input-filter.component';
import { PokedexService } from './pokedex.service';
import { PokemonBasicData } from './pokemon-basic-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppMainHeaderComponent,
    PokemonListComponent,
    InputFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  filterValue = output<string>();
  pokedexService: PokedexService = inject(PokedexService);
  pokemonListData: PokemonBasicData[] = [];
  pokemonListFiltered: PokemonBasicData[] = [];

  constructor() {
    this.pokedexService.getPokemonList().then((response) => {
      this.pokemonListData = response.data;
      this.pokemonListFiltered = response.data;
    });
  }

  onFilterValueChange(event: any) {
    console.log('outside' + event);
  }
}
