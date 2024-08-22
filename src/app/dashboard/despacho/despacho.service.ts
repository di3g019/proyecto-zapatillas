import { Injectable } from '@angular/core';
import { Despacho } from './despacho';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  constructor(private httpCliente: HttpClient) { }


  getAllDespacho():Observable<Despacho[]>{
    return this.httpCliente.get<Despacho[]>("http://localhost:8080/despacho/listar")
  }

  getDespacho(id: number):Observable<Despacho>{
    return this.httpCliente.get<Despacho>("http://localhost:8080/despacho/"+id)
  }

  createDespacho(despacho: Despacho):Observable<Despacho>{
    return this.httpCliente.post<Despacho>("http://localhost:8080/despacho/",despacho)
  }
}
