import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent implements OnInit {

  juegoSlug: any;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.juegoSlug = {
      id: this.rutaActiva.snapshot.params.gameslug
    };
    console.log(this.juegoSlug);

  }

}
