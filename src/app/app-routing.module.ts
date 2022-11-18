import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InsertpersonajeComponent } from './components/insertpersonaje/insertpersonaje.component';
import { PerosnajesComponent } from './components/perosnajes/perosnajes.component';
import { SerieComponent } from './components/serie/serie.component';
import { UpdatepersonajeComponent } from './components/updatepersonaje/updatepersonaje.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "insert", component: InsertpersonajeComponent },
  { path: "update", component: UpdatepersonajeComponent },
  { path: "serie/:id", component: SerieComponent },
  { path: "personajes/:id", component: PerosnajesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
