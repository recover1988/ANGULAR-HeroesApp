import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroePorId(id))
      )
      .subscribe(heroe => this.heroe = heroe)
  }

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ];

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: ''
  }

  guardar() {

    if (this.heroe.superhero.trim().length === 0) return;

    if (this.heroe.id) {
      //actualizar
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnackbar('Registro Actualizado'))
    } else {
      //crear
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnackbar('Registro Creado');
        })
    }
  };

  borrar() {


    this.dialog.open(ConfirmarComponent, {
      width: '300px',
    })

    this.heroesService.borrarHeroe(this.heroe.id!)
      .subscribe(resp => {
        this.router.navigate(['/heroes'])
      })
  };

  mostrarSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, 'ok!', {
      duration: 2500
    })
  }

}
