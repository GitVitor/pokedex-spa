import { Component, OnInit } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  isLoading = true;
  ngOnInit(): void {}
}
