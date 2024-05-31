import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { map } from 'rxjs';
import { PokedexService } from '../pokedex.service';
import { PokemonDetailsData } from '../pokemon-details-data';
import { UiBadgeComponent } from '../ui-badge/ui-badge.component';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, RouterModule, UiBadgeComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  isLoading = true;
  pokedexService: PokedexService = inject(PokedexService);
  pokemonData?: PokemonDetailsData;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => {
          return params['name'];
        })
      )
      .subscribe((name) => {
        this.fetchPokemonData(name);
      });
  }

  async fetchPokemonData(name: string) {
    try {
      this.isLoading = true;
      const response = await this.pokedexService.getPokemonDetail(name);
      this.pokemonData = response.data;
    } catch (error) {
    } finally {
      this.isLoading = false;
    }
  }
}
