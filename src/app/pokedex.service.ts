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

  async getPokemonList(): Promise<PaginatedResponse<PokemonBasicData>> {
    const data = await fetch(this.getURL());
    return data.json();
  }
}
