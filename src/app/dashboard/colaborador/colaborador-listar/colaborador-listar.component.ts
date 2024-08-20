import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { ColaboradorService } from '../colaborador.service';
import { Colaborador } from '../colaborador';


@Component({
  selector: 'app-colaborador-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './colaborador-listar.component.html',
  styleUrl: './colaborador-listar.component.css'
})
export class ColaboradorListarComponent {
  displayedColumns: string[] = [
  'idcolaborador', 
  'username', 
  'password', 
  'nombres',
  'apellidos',
  'correo',
  'fechaingreso',
  'activo',
  'tipoDocumentoColaborador'];
  
  colaboradores: Colaborador[] = []

  constructor(private colaboradorService: ColaboradorService){

  }
  ngOnInit(): void{
    this.colaboradorService.getAllColaborador().subscribe((data) => {
      console.log(data)
      this.colaboradores = data
    })
  }
  


}
