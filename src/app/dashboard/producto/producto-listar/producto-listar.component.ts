import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './producto-listar.component.html',
  styleUrl: './producto-listar.component.css'
})
export class ProductoListarComponent {

  displayedColumns: string[] = ['idproducto', 'pname','pdesc','pprecio','pstock',
  'ptalla','categoria','marca'];

  productos: Producto[] = []

  constructor(
    private productoService : ProductoService,
    private route: ActivatedRoute,
    private router: Router){}


    ngOnInit():void{
      this.productoService.getAllProductos()
      .subscribe((data)=>{this.productos = data})
    }

    irDetalleProducto(id: string){
      this.router.navigate([id], {relativeTo: this.route})
    }
  
    irCrearProducto(){
      this.router.navigate(["nuevo"], {relativeTo: this.route})
    }

}
