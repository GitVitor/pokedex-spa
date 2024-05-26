import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMainHeaderComponent } from './app-main-header/app-main-header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppMainHeaderComponent, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
