import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  reservas: any[];

  constructor(private firestore: FirestoreService) {
    this.firestore.getAll().subscribe((comprasSnapshot) => {
      this.reservas = [];
      comprasSnapshot.forEach((compraData: any) => {
        this.reservas.push({
          id: compraData.payload.doc.id,
          data: compraData.payload.doc.data()
        });
      });
    });
  }
  ngOnInit(): void {
  }

}
