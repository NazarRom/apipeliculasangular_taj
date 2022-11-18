import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/serie.service';
import { Personaje } from 'src/app/models/personaje';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-perosnajes',
  templateUrl: './perosnajes.component.html',
  styleUrls: ['./perosnajes.component.css']
})
export class PerosnajesComponent implements OnInit {
public personajes!: Array<Personaje>
  constructor(
    private _serives: SeriesService,
    private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      console.log(params['id']);
      var id = parseInt(params['id']);
      this._serives.getPersonajesSerie(id).subscribe(res=>{
        this.personajes = res;
      })
    })
  }

}
