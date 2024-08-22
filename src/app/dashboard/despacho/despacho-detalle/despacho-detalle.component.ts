import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DespachoService } from '../despacho.service';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-despacho-detalle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './despacho-detalle.component.html',
  styleUrl: './despacho-detalle.component.css'
})
export class DespachoDetalleComponent {

  iddespacho: string | null = ''
  despachoForm !: FormGroup
  formType!: FormType
  formTitulo!: string

  constructor(private despachoService: DespachoService,
    private router : ActivatedRoute){
  }

  ngOnInit(): void{
    this.iddespacho = this.router.snapshot.paramMap.get('id')
    this.despachoForm = this.crearFormulario()
    if(this.iddespacho !== 'nuevo'){
      this.consultarDespacho(Number(this.iddespacho))
      this.formTitulo = "Actualizar Despacho"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Despacho"
      this.formType = FormType.Crear
      console.log("nuevo")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      fechadespacho: new FormControl(''),
      estadodespacho: new FormControl('')
    })
  }

  consultarDespacho(id: number){
    this.despachoService.getDespacho(id).subscribe((data)=>{
        const {fechadespacho, estadodespacho} = data
        this.despachoForm.setValue({fechadespacho,estadodespacho})
      //console.log(data)
    })
  }

}
