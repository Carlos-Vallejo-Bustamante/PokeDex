import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemos(index: number = 1) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${index}`)
  }

}
