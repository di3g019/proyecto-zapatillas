import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import {Metododepago } from './metododepago';

@Injectable({
  providedIn: 'root'
})
export class MetododepagoService {

  constructor(private httpCliente: HttpClient) { }


  getAllMetododepago():Observable<Metododepago[]>{
    return this.httpCliente.get<Metododepago[]>("http://localhost:8080/metodopago/listar")
  }

  getMetododepago(id: number):Observable<Metododepago>{
    return this.httpCliente.get<Metododepago>("http://localhost:8080/metodopago/"+id)
  }

  createMetododepago(metododepago: Metododepago):Observable<Metododepago>{
    return this.httpCliente.post<Metododepago>("http://localhost:8080/metodopago/",metododepago)
  }



}
