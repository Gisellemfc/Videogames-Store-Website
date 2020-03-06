import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VistaDetalleComponent } from './components/vista-detalle/vista-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { BotonComprarComponent } from './components/boton-comprar/boton-comprar.component';
import { ProximosJuegosComponent } from './components/proximos-juegos/proximos-juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VistaDetalleComponent,
    NavbarComponent,
    AdminComponent,
    ComprarComponent,
    BotonComprarComponent,
    ProximosJuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
