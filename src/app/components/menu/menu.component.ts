import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/serie.service';
import { Serie } from 'src/app/models/serie';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
public select!: Array<Serie>;
  constructor(private _servies:SeriesService) { }

  ngOnInit(): void {
    this.loadSelect();
  }
  loadSelect():void {
    this._servies.getSeries().subscribe(res=>{
      this.select = res;
    })
  }
}
