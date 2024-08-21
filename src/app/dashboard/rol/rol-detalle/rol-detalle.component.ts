import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { RolService } from '../rol.service';
import { ActivatedRoute } from '@angular/router';


enum FormType{
  Crear = 0,
  Actualizar = 1
}

@Component({
  selector: 'app-rol-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './rol-detalle.component.html',
  styleUrl: './rol-detalle.component.css'
})
export class RolDetalleComponent {

  idrol: string | null = ''
  rolForm !: FormGroup
  formType !: FormType
  formTitulo !: string

  constructor(
    private rolService: RolService,
    private router: ActivatedRoute){}



    ngOnInit(): void{
      this.idrol = this.router.snapshot.paramMap.get('id')
      this.rolForm = this.crearFormulario()
      if(this.idrol !== 'nuevo'){
          this.consultarRol(Number(this.idrol))
          this.formTitulo = "Actualizar Rol"
          this.formType = FormType.Actualizar
      }else{
        this.formTitulo = "Nuevo Rol"
        this.formType = FormType.Crear
        console.log("nuevo")
      }
  
    }

    crearFormulario(): FormGroup{
      return new FormGroup({
        nombrerol: new FormControl('')
      })
    }
  
    consultarRol(id: number){
      this.rolService.getRol(id)
      .subscribe((data)=>{
        const {nombrerol}=data
      this.rolForm.setValue({nombrerol})
  
      })

    }

}
