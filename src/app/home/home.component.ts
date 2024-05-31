import { Component, output, inject } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

import { PokedexService } from '../pokedex.service';
import { PokemonBasicData } from '../pokemon-basic-data';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { InputFilterComponent } from '../input-filter/input-filter.component';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokemonListComponent, InputFilterComponent, UiButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  filterValue = output<string>();
  pokedexService: PokedexService = inject(PokedexService);
  pokemonListData: PokemonBasicData[] = [];
  pokemonListFiltered: PokemonBasicData[] = [];
  filterTextChanged: Subject<string> = new Subject<string>();
  isLoading = true;
  pokemonFetchData = this.getDefaultPokemonFetchData();

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

  async onLoadMore() {
    this.pokemonFetchData.offset = this.pokemonFetchData.limit;
    this.pokemonFetchData.limit += 9;

    await this.fetchPokemonList();
  }

  getDefaultPokemonFetchData() {
    return {
      offset: 0,
      limit: 9,
    };
  }

  private async fetchPokemonList(name?: string) {
    try {
      const response = await this.pokedexService.getPokemonList(
        name,
        this.pokemonFetchData.offset,
        this.pokemonFetchData.limit
      );

      this.pokemonListData = response.data;
    } catch (error) {
    } finally {
      this.isLoading = false;
    }
  }
}
