import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpCliente: HttpClient) { }


  getAllProductos():Observable<Producto[]>{
    return this.httpCliente.get<Producto[]>("http://localhost:8080/productos/listar")
  }

  getProductos(id: number):Observable<Producto>{
    return this.httpCliente.get<Producto>("http://localhost:8080/productos/"+id)
  }

  createProducto(producto: Producto):Observable<Producto>{
    return this.httpCliente.post<Producto>("http://localhost:8080/productos/",producto)
  }
}
