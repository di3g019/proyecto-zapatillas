import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumentoColaborador } from './tipodocumentocolaborador';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentocolaboradorService {

  constructor(private httpCliente: HttpClient) { }

  getAllTipoDocColaborador():Observable<TipoDocumentoColaborador[]>{
    return this.httpCliente.get<TipoDocumentoColaborador[]>("http://localhost:8080/tipodocumentocolaborador/listar")
  }

  getTipoDocColaborador(id: number):Observable<TipoDocumentoColaborador>{
    return this.httpCliente.get<TipoDocumentoColaborador>("http://localhost:8080/tipodocumentocolaborador/"+id)
  }

  createRol(tipodocumentocolaborador:TipoDocumentoColaborador):Observable<TipoDocumentoColaborador>{
    return this.httpCliente.post<TipoDocumentoColaborador>("http://localhost:8080/tipodocumentocolaborador/", tipodocumentocolaborador)
  }
}
