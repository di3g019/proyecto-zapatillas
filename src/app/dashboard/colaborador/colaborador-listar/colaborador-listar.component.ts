import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { ColaboradorService } from '../colaborador.service';
import { Colaborador } from '../colaborador';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(private colaboradorService: ColaboradorService,
    private route: ActivatedRoute,
    private router: Router){

  }
  ngOnInit(): void{
    this.colaboradorService.getAllColaborador()
    .subscribe((data) => {this.colaboradores = data})
  }

  irDetalleColaborador(id: string){
    this.router.navigate([id], {relativeTo: this.route})
  }

  irCrearColaborador(){
    this.router.navigate(["nuevo"], {relativeTo: this.route})
  }


}
