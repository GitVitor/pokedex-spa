import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon/:name', component: PokemonDetailsComponent },
];
