import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-boton-comprar',
  templateUrl: './boton-comprar.component.html',
  styleUrls: ['./boton-comprar.component.css']
})
export class BotonComprarComponent implements OnInit {

  juegoID: any;
  jueguito: any;
  juego: any;

  estrenada: boolean;
  stock: number;
  fecha: Date;
  hoy: Date = new Date();

  constructor(
    private servicioJuego: JuegoService,
    private rutaActiva: ActivatedRoute,
    private api: ApiService) { }

  ngOnInit(): void {
    this.jueguito = this.rutaActiva.paramMap.subscribe( e => {
      this.juegoID = this.rutaActiva.snapshot.paramMap.get('id');
    });

    this.fecha = new Date(this.servicioJuego.buscarFecha(this.juegoID));
    console.log(this.fecha);

    this.setEstado();
  }

  setEstado() {
    if (this.fecha >= this.hoy) {
      this.estrenada = false;
    } else {
      this.estrenada = true;
    }
  }

}
