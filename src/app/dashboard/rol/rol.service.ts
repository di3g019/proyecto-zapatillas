import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private httpCliente: HttpClient) { }

  getAllRol():Observable<Rol[]>{
    return this.httpCliente.get<Rol[]>("http://localhost:8080/rol/listar")
  }

  getRol(id: number):Observable<Rol>{
    return this.httpCliente.get<Rol>("http://localhost:8080/rol/"+id)
  }

  createRol(rol:Rol):Observable<Rol>{
    return this.httpCliente.post<Rol>("http://localhost:8080/rol/", rol)
  }



}
