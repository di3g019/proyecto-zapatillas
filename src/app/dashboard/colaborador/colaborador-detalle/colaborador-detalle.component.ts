import { Component } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';

enum FormType{
  Crear = 0,
  Actualizar = 1
}


@Component({
  selector: 'app-colaborador-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './colaborador-detalle.component.html',
  styleUrl: './colaborador-detalle.component.css'
})
export class ColaboradorDetalleComponent {
  idcolaborador: string | null = ''
  colaboradorForm !: FormGroup
  formType!: FormType
  formTitulo!: string

  constructor(private colaboradorService: ColaboradorService,
    private router : ActivatedRoute){
  }

  ngOnInit(): void{
    this.idcolaborador = this.router.snapshot.paramMap.get('id')
    this.colaboradorForm = this.crearFormulario()
    if(this.idcolaborador !== 'nuevo'){
      this.consultarColaborador(Number(this.idcolaborador))
      this.formTitulo = "Actualizar Colaborador"
      this.formType = FormType.Actualizar
    }else{
      this.formTitulo = "Nuevo Colaborador"
      this.formType = FormType.Crear
      console.log("nuevo")
    }
  }

  crearFormulario():FormGroup{
    return new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl('')
    })
  }

  consultarColaborador(id: number){
    this.colaboradorService.getColaborador(id).subscribe((data)=>{
        const {nombres, apellidos} = data
        this.colaboradorForm.setValue({nombres,apellidos})
      //console.log(data)
    })
  }
}
