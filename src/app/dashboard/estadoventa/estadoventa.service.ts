import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estadoventa } from './estadoventa';

@Injectable({
  providedIn: 'root'
})
export class EstadoventaService {

  constructor(private httpClient: HttpClient) { }

  getAllEstadoVenta():Observable<Estadoventa[]>{
    return this.httpClient.get<Estadoventa[]>("http://localhost:8080/estadoventa/listar")
  }

  getEstadoVenta(id:number):Observable<Estadoventa>{
    return this.httpClient.get<Estadoventa>("http://localhost:8080/estadoventa/"+id)
  }

  createEstadoVenta(estadoventa: Estadoventa):Observable<Estadoventa>{
    return this.httpClient.post<Estadoventa>("http://localhost:8080/estadoventa/", estadoventa)
  }




}
