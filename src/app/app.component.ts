import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // pokemonList: Pokemon[] = POKEMONS;
  // pokemonSelected?: Pokemon;
  // ngOnInit(): void {
  //   console.table(this.pokemonList);
  // }
  // selectPokemon(pokemonId: string) {
  //   const pokemon: Pokemon | undefined = this.pokemonList.find(
  //     (pokemon) => pokemon.id == +pokemonId
  //   );
  //   if (pokemon) {
  //     this.pokemonSelected = pokemon;
  //     console.log(`${pokemon.name} !, Gooooooooooo!`);
  //   } else {
  //     this.pokemonSelected = pokemon;
  //     console.log("Ce pokémon n'existe pas !");
  //   }
  // }
}
