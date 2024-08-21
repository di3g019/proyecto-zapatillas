import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { TipodocumentocolaboradorService } from '../tipodocumentocolaborador.service';
import { ActivatedRoute } from '@angular/router';

enum FormType{
  Crear = 0,
  Actualizar = 1
}


@Component({
  selector: 'app-tipodocumentocolaborador-detalle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './tipodocumentocolaborador-detalle.component.html',
  styleUrl: './tipodocumentocolaborador-detalle.component.css'
})
export class TipodocumentocolaboradorDetalleComponent {

  idTipoDocColab: string | null = ''
  tipoDocColabForm !: FormGroup
  formType !: FormType
  formTitulo !: string

  constructor(
    private tipoDocColabService: TipodocumentocolaboradorService,
    private router: ActivatedRoute){}



    ngOnInit(): void{
      this.idTipoDocColab = this.router.snapshot.paramMap.get('id')
      this.tipoDocColabForm = this.crearFormulario()
      if(this.idTipoDocColab !== 'nuevo'){
          this.consultarTipoDocColab(Number(this.idTipoDocColab))
          this.formTitulo = "Actualizar Tipo de Documento"
          this.formType = FormType.Actualizar
      }else{
        this.formTitulo = "Nuevo Tipo de Documento"
        this.formType = FormType.Crear
        console.log("nuevo")
      }
  
    }

    crearFormulario(): FormGroup{
      return new FormGroup({
        nombredocumento: new FormControl('')
      })
    }
  
    consultarTipoDocColab(id: number){
      this.tipoDocColabService.getTipoDocColaborador(id)
      .subscribe((data)=>{
        const {nombredocumento}=data
      this.tipoDocColabForm.setValue({nombredocumento})
  
      })

    }



}
