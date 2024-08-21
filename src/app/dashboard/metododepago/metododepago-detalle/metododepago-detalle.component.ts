import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MetododepagoService } from '../metododepago.service';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear = 0,
  Actualizar = 1
}


@Component({
  selector: 'app-metododepago-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './metododepago-detalle.component.html',
  styleUrl: './metododepago-detalle.component.css'
})
export class MetododepagoDetalleComponent {

  idmetododepago: string | null = ''
  metodopagoForm !: FormGroup
  formType!: FormType
  formTitulo!: string


  constructor(
    private metodopagoService: MetododepagoService,
    private router: ActivatedRoute){}

  
    ngOnInit(): void{
      this.idmetododepago = this.router.snapshot.paramMap.get('id')
      this.metodopagoForm = this.crearFormulario()
      if(this.idmetododepago !== 'nuevo'){
          this.consultarMetodopago(Number(this.idmetododepago))
          this.formTitulo = "Actualizar Metodo de pago"
          this.formType = FormType.Actualizar
      }else{
        this.formTitulo = "Nuevo Metodo de Pago"
        this.formType = FormType.Crear
        console.log("nuevo")
      }
  
    }




  crearFormulario(): FormGroup{
    return new FormGroup({
      metodopago: new FormControl('')
    })
  }

  consultarMetodopago(id: number){
    this.metodopagoService.getMetododepago(id)
    .subscribe((data)=>{
      const {metodopago}=data
    this.metodopagoForm.setValue({metodopago})

    })
  }
   
    






}
