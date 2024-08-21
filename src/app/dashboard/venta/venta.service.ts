import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from './venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private httpClient: HttpClient) { }

  getAllVenta():Observable<Venta[]>{
    return this.httpClient.get<Venta[]>("http://localhost:8080/venta/listar")
  }

  getVenta(id: number):Observable<Venta>{
    return this.httpClient.get<Venta>("http://localhost:8080/venta/"+id)
  }

  createVenta(venta: Venta):Observable<Venta>{
    return this.httpClient.post<Venta>("http://localhost:8080/venta", venta)
  }
}
