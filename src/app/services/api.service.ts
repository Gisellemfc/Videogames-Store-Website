import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://rawg.io/api';

  juegos : string = '/games/';
  proxJuegos: string = '&dates=';
  pJuegos: string = '/games?page=';
  nJuegos: string = '&page_size=20';
  pagina;
  paginaB;

  constructor(protected http: HttpClient) {
    this.pagina = 1;
    this.paginaB = 1;
  }

  getJuegos(direccion) {
    return this.http.get(this.url + direccion);
  }

  masJuegos(){
    this.pagina = this.pagina + 1;
  }

  masJuegosB(){
    this.paginaB = this.paginaB + 1;
  }
}
