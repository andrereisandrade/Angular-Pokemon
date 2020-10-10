import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemons$: Observable<any>;

  constructor(public service: PokemonService) { }

  ngOnInit() {
    this.pokemons$ = this.service.list();
  }

  search(filter: string) {

  }

}
