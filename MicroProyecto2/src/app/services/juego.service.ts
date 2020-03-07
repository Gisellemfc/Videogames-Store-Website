import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  juegos: any[];

  constructor() { }

  setJuegos(juegos: any[]){
    this.juegos = juegos;
  }

}
