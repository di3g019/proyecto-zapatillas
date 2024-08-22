import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  getAllCliente():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>("http://localhost:8080/cliente/listar")
  }

  getColaborador(id: number):Observable<Cliente>{
    return this.httpClient.get<Cliente>("http://localhost:8080/cliente/"+id)
  }

  createColaborador(Cliente: Cliente):Observable<Cliente>{
    return this.httpClient.post<Cliente>("http://localhost:8080/cliente", Cliente)
  }

}
