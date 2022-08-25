import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="center">
      <img
        src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"
      />
      <h1>Cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effects waves-teal btn-flat"
        >Retour au pokédex</a
      >
    </div>
  `,
  styles: [],
})
export class PageNotFoundComponent {}
