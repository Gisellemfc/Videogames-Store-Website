import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  juegos: any[] = [];
  filtroJuego = '';

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.mostrar();
  }

  mostrar() {
    this.api.getJuegos(this.api.pJuegos + this.api.pagina + this.api.nJuegos).subscribe(data => {
      for (let index = 0; index < 20; index++) {
        //Empujar los juegos al arreglo
        this.juegos.push(data['results'][index]);
      }
      // console.log(this.juegos);
    },
    error => console.log(error)
    );
  }

  cargarMas() {
    //Cambiar pagina de la api
    this.api.masJuegos();
    this.mostrar();
  }

}
