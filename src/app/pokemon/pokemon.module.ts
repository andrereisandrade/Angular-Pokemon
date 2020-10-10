import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { DetailComponent } from './detail/detail.component';
import { ShowImageDirective } from './directives/show-image.directive';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemons/list',
    component: ListComponent
  },
  {
    path: 'pokemons/cards',
    component: CardsComponent
  },
  {
    path: 'pokemons/id',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    DetailComponent,
    ShowImageDirective,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    ShowImageDirective,
  ]
})
export class PokemonModule { }
