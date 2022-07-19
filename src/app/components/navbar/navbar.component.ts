import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbar = [
    {nombre: 'Juegos', url: 'home'},
    {nombre: 'Próximos Juegos', url: 'proximos-juegos'},
    {nombre: 'Admin', url: 'admin'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
