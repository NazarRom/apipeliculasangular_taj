import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { SeriesService } from 'src/app/services/serie.service';
import { Serie } from 'src/app/models/serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
public serie!: Serie;
public id!: number;
  constructor(
    private _activeRoute:ActivatedRoute,
    private _services:SeriesService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      var id = parseInt(params['id']);
      this.id = id;
    });
    this.loadSerie();
  }


  loadSerie():void{
    this._services.getSerieById(this.id).subscribe(res=>{
      this.serie = res;
    })
  }
}
