import { Injectable } from '@angular/core';
import { PaginatedResponse } from './paginated-response';
import { PokemonBasicData } from './pokemon-basic-data';
import { environment } from '../environments/environment';
import { PokemonDetailsData } from './pokemon-details-data';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private getURL() {
    return `${environment.mainAPI}pokemon`;
  }

  async getPokemonList(
    name?: string,
    offset = 0,
    limit = 10
  ): Promise<PaginatedResponse<PokemonBasicData>> {
    const url = new URL(this.getURL());

    if (name && name.trim().length > 0) {
      url.searchParams.set('name', name);
    }

    url.searchParams.set('offset', offset.toString());
    url.searchParams.set('limit', limit.toString());

    const data = await fetch(url.toString());
    return data.json();
  }

  async getPokemonDetail(name: string): Promise<{ data: PokemonDetailsData }> {
    const url = new URL(`${this.getURL()}/${name}`);
    const data = await fetch(url.toString());
    return data.json();
  }
}
