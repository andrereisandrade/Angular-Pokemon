import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { URL_BASE } from './config/settings';
import { Card, Pokemon } from './model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Pokemon[]> {
    return this.http.get<Card>(`${URL_BASE}/cards`)
      .pipe(
        switchMap((card: Card) => of(card.cards))
      );
  }

}
