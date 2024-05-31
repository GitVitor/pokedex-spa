import { Component, output, inject } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, tap } from 'rxjs';

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
  filterTextChanged: Subject<string> = new Subject<string>();
  isLoading = true;
  pokemonFetchData = this.getDefaultPokemonFetchData();

  constructor() {
    const SECOND = 1000;

    this.fetchPokemonList(false);

    this.filterTextChanged
      .pipe(
        tap(() => {
          this.pokemonListData = [];
          this.isLoading = true;
        }),
        debounceTime(SECOND),
        distinctUntilChanged()
      )
      .subscribe((filterQuery) => {
        this.fetchPokemonList(false, filterQuery);
      });
  }

  onFilterValueChange(event: string) {
    this.filterTextChanged.next(event);
  }

  async onLoadMore() {
    this.pokemonFetchData.offset = this.pokemonFetchData.limit;
    this.pokemonFetchData.limit += 9;

    await this.fetchPokemonList(true);
  }

  getDefaultPokemonFetchData() {
    return {
      offset: 0,
      limit: 9,
    };
  }

  private async fetchPokemonList(incremental: boolean, name?: string) {
    try {
      this.isLoading = true;
      const response = await this.pokedexService.getPokemonList(
        name,
        this.pokemonFetchData.offset,
        this.pokemonFetchData.limit
      );

      this.pokemonListData = incremental
        ? [...this.pokemonListData, ...response.data]
        : response.data;
    } catch (error) {
    } finally {
      this.isLoading = false;
    }
  }
}
