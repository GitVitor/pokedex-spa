import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  isLoading = true;
  ngOnInit(): void {}
}
