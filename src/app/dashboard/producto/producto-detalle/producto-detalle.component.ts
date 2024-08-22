import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent {
  idproducto: string | null = ''
  productoForm !: FormGroup
  formType !: FormType
  formTitulo !: string

  constructor(
    private productoService: ProductoService,
    private router: ActivatedRoute){}



    ngOnInit(): void{
      this.idproducto = this.router.snapshot.paramMap.get('id')
      this.productoForm = this.crearFormulario()
      if(this.idproducto !== 'nuevo'){
          this.consultarProducto(Number(this.idproducto))
          this.formTitulo = "Actualizar Producto"
          this.formType = FormType.Actualizar
      }else{
        this.formTitulo = "Nuevo Producto"
        this.formType = FormType.Crear
        console.log("nuevo")
      }
  
    }

    crearFormulario(): FormGroup{
      return new FormGroup({
        pname: new FormControl(''),
        pdesc: new FormControl(''),
        pprecio: new FormControl(''),
        pstock: new FormControl(''),
        ptalla: new FormControl('')
      })
    }
  
    consultarProducto(id: number){
      this.productoService.getProductos(id)
      .subscribe((data)=>{
        const {pname,pdesc,pprecio,pstock,ptalla}=data
      this.productoForm.setValue({pname,pdesc,pprecio,pstock,ptalla})
  
      })

    }

}
