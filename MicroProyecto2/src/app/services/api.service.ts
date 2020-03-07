import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://rawg.io/api';

  juegos : string = '/games/';
  pJuegos: string = '/games?page=';
  nJuegos: string = '&page_size=20';
  pagina = 1;

  constructor(protected http: HttpClient) { }

  getJuegos(direccion) {
    return this.http.get(this.url + direccion);
  }

  masJuegos(){
    this.pagina = this.pagina + 1;
  }


}
