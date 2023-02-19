import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: string): string {
    return `assets/heroes/${heroe}.jpg`;
  }

}
