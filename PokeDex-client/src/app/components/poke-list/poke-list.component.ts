import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  cardPokemon: string[] = ['position', 'image', 'name']
  data: any[] = []
  ball: boolean = true

  public user: any = {};
  public userMongoDb: any = {};
  public token: string = '';

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token") as string;
    if (this.token.length === 1141) this.user = this.decodificarJwt(this.token);
    if (this.token.length !== 1141) this.userMongoDb = JSON.parse(this.token)

    this.getPokemons()
    setTimeout(() => {
      this.ball = !this.ball
    }, 3000);
  }

  decodificarJwt(token: string): any {

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  getPokemons() {

    for (let i: number = 1; i <= 150; i++) {

      this.pokeService.getPokemos(i)
        .subscribe({
          next: res => {
            this.data.push(res)
          },
          error: error => console.log(error)
        })
    }
  }
}
