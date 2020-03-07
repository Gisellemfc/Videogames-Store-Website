import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuegoService } from '../../services/juego.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  jueguito: any;
  juegoID: any;
  juego: any;

  reserva = {
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    cantidad: '',
    juego: '',
    juegoID: '',
  };

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicioJuego: JuegoService,
    private firebase: FirestoreService,
    private router: Router
    ) {
      this.jueguito = this.rutaActiva.paramMap.subscribe( e => {
        this.juegoID = this.rutaActiva.snapshot.paramMap.get('id');
        this.juego = this.servicioJuego.buscarJuego(this.juegoID);
      });
    }

  ngOnInit(): void {
  }

  reservar() {
    this.reserva.juego = this.juego.name;
    this.reserva.juegoID = this.juegoID;

    this.firebase.create(this.reserva).then(res => {
      alert('Reserva realizada con éxito');
      this.router.navigate(['/home']);
    }).catch(err => console.log(err)
    );
  }
}
