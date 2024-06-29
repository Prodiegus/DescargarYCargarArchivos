import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarComponent } from './cargar/cargar.component';
import { BajarComponent } from './bajar/bajar.component';

const routes: Routes = [
  { path: 'cargar', component: CargarComponent },
  { path: '', component: BajarComponent},
  { path: '*', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
