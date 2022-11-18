import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Personaje } from "../models/personaje";
import { Observable } from "rxjs";
@Injectable()
export class SeriesService {
    constructor(private _http: HttpClient,){}

    getSeries():Observable<any>{
        var request = "/api/Series";
        var url = environment.urlApiSeries + request;
        return this._http.get(url);
    }
    getSerieById(id:number):Observable<any> {
        var request = "/api/Series/" + id;
        var url = environment.urlApiSeries + request;
        return this._http.get(url);
    }

    getPersonajesSerie(id:number):Observable <any> {
        var request ="/api/Series/PersonajesSerie/" + id;
        var url = environment.urlApiSeries + request;
        return this._http.get(url);
    }
}