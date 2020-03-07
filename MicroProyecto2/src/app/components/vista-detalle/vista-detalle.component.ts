import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {

  juegoID: any;
  jueguito: any;
  juego: any;

  constructor(
    private rutaActiva: ActivatedRoute,
    private api: ApiService) { }

  ngOnInit(): void {
    this.jueguito = this.rutaActiva.paramMap.subscribe( e => {
      this.juegoID = this.rutaActiva.snapshot.paramMap.get('id');
    });
    this.api.getJuegos(this.api.juegos + this.juegoID).subscribe(juego => {
      this.juego = juego;
    });

  }

}
