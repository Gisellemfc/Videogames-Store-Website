import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { ApiService } from '../../services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-proximos-juegos',
  templateUrl: './proximos-juegos.component.html',
  styleUrls: ['./proximos-juegos.component.css']
})
export class ProximosJuegosComponent implements OnInit {

  proximas: any[] = [];
  hoy = new Date();

  constructor(
    private api: ApiService,
    private game: JuegoService,
    private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.api.paginaB = 1;
    this.mostrar();
  }

  mostrar(){
    const today =this.datepipe.transform(this.hoy, 'yyyy-MM-dd');
    this.api.getJuegos(this.api.pJuegos + this.api.paginaB + this.api.proxJuegos + today + ',2022-01-01').subscribe(data => {
      for (let index = 0; index < 20; index++) {
        // Empujar los juegos al arreglo
        this.proximas.push(data['results'][index]);
      }
      this.game.setJuegos(this.proximas);
      this.proximas.sort((a, b): number => {
        return new Date(a.released).getTime() - new Date(b.released).getTime();
      });
    },
    error => console.log(error)
    );

  }

cargarMas() {
    //Cambiar pagina de la api
    this.api.masJuegosB();
    this.mostrar();
  }

}
