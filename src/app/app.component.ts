import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected?: Pokemon;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      this.pokemonSelected = pokemon;
      console.log(`${pokemon.name} !, Gooooooooooo!`);
    } else {
      this.pokemonSelected = pokemon;
      console.log("Ce pokémon n'existe pas !");
    }
  }
}
