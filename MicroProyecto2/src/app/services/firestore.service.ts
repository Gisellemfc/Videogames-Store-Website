import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  // Crea un nuevo documento
  public create(data) {
    return this.firestore.collection('Compras').add(data);
  }
  // Obtiene un documento
  public get(documentId: string) {
    return this.firestore.collection('Compras').doc(documentId).snapshotChanges();
  }
  // Obtiene todos los documentos
  public getAll() {
    return this.firestore.collection('Compras').snapshotChanges();
  }
  // Actualiza un documento
  public update(documentId: string, data: any) {
    return this.firestore.collection('Compras').doc(documentId).set(data);
  }
  // Elimina un documento
  public delete(documentId: string) {
    return this.firestore.collection('Compras').doc(documentId).delete();
  }
}
