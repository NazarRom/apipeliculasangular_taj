import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SeriesService } from './services/serie.service';
import { UpdatepersonajeComponent } from './components/updatepersonaje/updatepersonaje.component';
import { InsertpersonajeComponent } from './components/insertpersonaje/insertpersonaje.component';
import { SerieComponent } from './components/serie/serie.component';
import { PerosnajesComponent } from './components/perosnajes/perosnajes.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UpdatepersonajeComponent,
    InsertpersonajeComponent,
    SerieComponent,
    PerosnajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
