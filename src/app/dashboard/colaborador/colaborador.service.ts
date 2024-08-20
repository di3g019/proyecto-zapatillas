import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from './colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private httpClient: HttpClient) { }

  getAllColaborador():Observable<Colaborador[]>{
    return this.httpClient.get<Colaborador[]>("http://localhost:8080/colaborador/listar")
  }

  getColaborador(id: number):Observable<Colaborador>{
    return this.httpClient.get<Colaborador>("http://localhost:8080/colaborador/"+id)
  }

  createColaborador(colaborador: Colaborador):Observable<Colaborador>{
    return this.httpClient.post<Colaborador>("http://localhost:8080/colaborador", colaborador)
  }

}
