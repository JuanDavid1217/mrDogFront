import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorariosComponent } from './horarios/horarios.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { EsteticaComponent } from './estetica/estetica.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { BinddingService } from './services/bindding.service';

@NgModule({
  declarations: [
    AppComponent,
    HorariosComponent,
    BoutiqueComponent,
    EsteticaComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BinddingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
