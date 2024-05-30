import { Injectable } from '@angular/core';
import { PaginatedResponse } from './paginated-response';
import { PokemonBasicData } from './pokemon-basic-data';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private getURL() {
    return `${environment.mainAPI}pokemon`;
  }

  async getPokemonList(
    name?: string
  ): Promise<PaginatedResponse<PokemonBasicData>> {
    const url = new URL(this.getURL());

    if (name && name.trim().length > 0) {
      url.searchParams.set('name', name);
    }

    const data = await fetch(url.toString());
    return data.json();
  }
}
