import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadoventaService } from '../estadoventa.service';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-estadoventa-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './estadoventa-detalle.component.html',
  styleUrl: './estadoventa-detalle.component.css'
})
export class EstadoventaDetalleComponent {
  idestadoventa: string | null = ''
  estadoventaForm !: FormGroup
  formType!: FormType
  formTitulo!: string

  constructor(private estadoventaService: EstadoventaService,
    private router: ActivatedRoute){}

  ngOnInit(): void{
    this.idestadoventa = this.router.snapshot.paramMap.get('id')
    this.estadoventaForm = this.crearFormulario()
    if(this.idestadoventa !== 'nuevo'){
        this.consultarEstadoventa(Number(this.idestadoventa))
        this.formTitulo = "Actualizar Estado de Venta"
        this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Estado de Venta"
      this.formType = FormType.Crear
      console.log("nuevo")
    }

  }
  
  
  crearFormulario():FormGroup{
    return new FormGroup({
      estado: new FormControl('')
    })
  }

  consultarEstadoventa(id:number){
    this.estadoventaService.getEstadoVenta(id)
    .subscribe((data)=>{
      const {estado}=data
    this.estadoventaForm.setValue({estado})
  })
  }


}
