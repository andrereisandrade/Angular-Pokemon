import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  pokemons$: Observable<any>;

  constructor(public service: PokemonService) { }

  ngOnInit() {
    this.pokemons$ = this.service.list();
  }
}
