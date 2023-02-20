import { Component, } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  constructor(private heroesService: HeroesService) { };

  termino: string = '';

  heroes: Heroe[] = [];

  heroeSeleccionado: Heroe | undefined;

  buscando() {
    this.heroesService.getSugerencias(this.termino.trim()).subscribe(heroes => this.heroes = heroes)
  };

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      this.heroeSeleccionado = undefined
      return
    };

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this, this.heroesService.getHeroePorId(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe)
  }
}
