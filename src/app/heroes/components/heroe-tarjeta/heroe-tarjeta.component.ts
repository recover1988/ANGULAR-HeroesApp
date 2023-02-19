import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: []
})
export class HeroeTarjetaComponent {



  @Input() heroe: Heroe = {
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    superhero: '',
    alt_img: '',
    id: ','
  };


}
