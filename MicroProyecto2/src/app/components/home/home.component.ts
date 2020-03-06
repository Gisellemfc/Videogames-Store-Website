import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  juegos: any[] = [];
  nJuegos: string = '/games?page_size=20';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getJuegos(this.nJuegos).subscribe(data => {
      this.juegos = data['results'];
      console.log(this.juegos);

    },
    error => console.log(error)
    );
  }

}
