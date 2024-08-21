import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { TipoDocumentoColaborador } from '../tipodocumentocolaborador';
import { TipodocumentocolaboradorService } from '../tipodocumentocolaborador.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tipodocumentocolaborador-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './tipodocumentocolaborador-listar.component.html',
  styleUrl: './tipodocumentocolaborador-listar.component.css'
})
export class TipodocumentocolaboradorListarComponent {
  displayedColumns: string[] = ['iddocumento', 'nombredocumento'];

  tipoDocColaborador: TipoDocumentoColaborador[] = []


  constructor(
    private tipoDocService : TipodocumentocolaboradorService,
    private route: ActivatedRoute,
    private router: Router){}


    ngOnInit():void{
      this.tipoDocService.getAllTipoDocColaborador()
      .subscribe((data)=>{this.tipoDocColaborador = data})
    }

    irDetalleTipoDocColab(id: string){
      this.router.navigate([id], {relativeTo: this.route})
    }
  
    irCrearTipoDocColab(){
      this.router.navigate(["nuevo"], {relativeTo: this.route})
    }






}
