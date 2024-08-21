import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Metododepago } from '../metododepago';
import { MetododepagoService } from '../metododepago.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-metododepago-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './metododepago-listar.component.html',
  styleUrl: './metododepago-listar.component.css'
})
export class MetododepagoListarComponent {
  displayedColumns: string[] = ['idmetododepago', 'metodopago'];
  metodosdepago : Metododepago[] = []

  constructor(
    private metododepagoService: MetododepagoService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit():void{
    this.metododepagoService.getAllMetododepago()
    .subscribe((data)=>{this.metodosdepago = data})
  }

  irDetalleMetodopago(id: string){
    this.router.navigate([id], {relativeTo: this.route})
  }

  irCrearMetododepago(){
    this.router.navigate(["nuevo"], {relativeTo: this.route})
  }

}
