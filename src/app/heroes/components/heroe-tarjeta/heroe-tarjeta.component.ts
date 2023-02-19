import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: []
})
export class HeroeTarjetaComponent {



  @Input() heroe!: Heroe; // se puede poner el ! para decir que siempre va a recibir un valor o se puede poner Heroe | undefined como tipo


}
