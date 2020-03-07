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
import { HttpClientModule} from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuscadorPipe } from './pipes/buscador.pipe';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VistaDetalleComponent,
    NavbarComponent,
    AdminComponent,
    ComprarComponent,
    BotonComprarComponent,
    ProximosJuegosComponent,
    BuscadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
