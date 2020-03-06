import { ProximosJuegosComponent } from './components/proximos-juegos/proximos-juegos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { VistaDetalleComponent } from './components/vista-detalle/vista-detalle.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'proximos-juegos',
    component: ProximosJuegosComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'home/vista-detalle/:gameslug',
    component: VistaDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
