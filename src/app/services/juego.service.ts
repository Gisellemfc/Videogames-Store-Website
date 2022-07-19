import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  juegos: any[];

  constructor() { }

  setJuegos(juegos: any[]) {
    this.juegos = juegos;
  }

  buscarFecha(id){
    for (let index = 0; index < this.juegos.length; index++) {
      if(this.juegos[index].id == id){
        return this.juegos[index].released;
      }

    }
  }

  buscarJuego(id){
    for (let index = 0; index < this.juegos.length; index++) {
      if(this.juegos[index].id == id){
        return this.juegos[index];
      }

    }
  }
}
