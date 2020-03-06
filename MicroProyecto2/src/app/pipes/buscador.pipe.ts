import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '') return value;
    const resultadoJuego = [];
    for( let post of value) {
      if (post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoJuego.push(post);
      }
    }
    return resultadoJuego;
  }

}
