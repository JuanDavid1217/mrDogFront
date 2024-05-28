import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsteticaComponent } from './estetica/estetica.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { HorariosComponent } from './horarios/horarios.component';
import { ConsultasComponent } from './consultas/consultas.component';

const routes: Routes = [
  {path:'', redirectTo: '/estetica', pathMatch: 'full'},
  {path:'estetica', component: EsteticaComponent},
  {path:'consultas', component: ConsultasComponent},
  {path:'boutique', component: BoutiqueComponent},
  {path: 'horarios', component: HorariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
