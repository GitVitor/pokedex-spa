import { Component, Input, OnInit } from '@angular/core';
import { PokemonBasicData } from '../pokemon-basic-data';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { UiBadgeComponent } from '../ui-badge/ui-badge.component';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, RouterModule, UiBadgeComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent implements OnInit {
  @Input() isloading!: boolean;
  @Input() pokemonData?: PokemonBasicData;
  @Input() index!: number;
  mainType?: string;
  ngOnInit(): void {
    this.mainType = this.pokemonData?.types[0].type.name;
  }
}
