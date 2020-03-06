import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://rawg.io/api';

  constructor(protected http: HttpClient) { }

  getJuegos(direccion) {
    return this.http.get(this.url + direccion);
  }


}
