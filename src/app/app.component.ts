import { Component, output, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

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
  filterTextChanged: Subject<string> = new Subject<string>();
  isLoading = true;

  constructor() {
    const SECOND = 1000;

    this.fetchPokemonList();

    this.filterTextChanged
      .pipe(debounceTime(SECOND), distinctUntilChanged())
      .subscribe((filterQuery) => {
        this.fetchPokemonList(filterQuery);
      });
  }

  onFilterValueChange(event: string) {
    this.filterTextChanged.next(event);
  }

  private async fetchPokemonList(name?: string) {
    try {
      const response = await this.pokedexService.getPokemonList(name);
      this.pokemonListData = response.data;
    } catch (error) {
    } finally {
      this.isLoading = false;
    }
  }
}
