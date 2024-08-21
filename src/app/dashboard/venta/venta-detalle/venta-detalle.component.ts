import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { VentaService } from '../venta.service';
import { ActivatedRoute } from '@angular/router';

enum FormType{
  Crear = 0,
  Actualizar = 1
}


@Component({
  selector: 'app-venta-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './venta-detalle.component.html',
  styleUrl: './venta-detalle.component.css'
})
export class VentaDetalleComponent {

  idventa: string | null = ''
  ventaForm !: FormGroup
  formType!: FormType
  formTitulo!: string



  constructor(private ventaService: VentaService,
    private router : ActivatedRoute){
  }


  ngOnInit(): void{
    this.idventa = this.router.snapshot.paramMap.get('id')
    this.ventaForm = this.crearFormulario()
    if(this.idventa !== 'nuevo'){
      this.consultarVenta(Number(this.idventa))
      this.formTitulo = "Actualizar Venta"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Venta"
      this.formType = FormType.Crear
      console.log("nuevo")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      fecha: new FormControl(''),
      descuento: new FormControl('')
    })
  }

  consultarVenta(id: number){
    this.ventaService.getVenta(id).subscribe((data)=>{
        const {fecha, descuento} = data
        this.ventaForm.setValue({fecha,descuento})
      //console.log(data)
    })
  }

}
