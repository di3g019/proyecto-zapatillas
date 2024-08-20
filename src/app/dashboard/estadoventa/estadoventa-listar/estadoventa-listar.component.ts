import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { EstadoventaService } from '../estadoventa.service';
import { Estadoventa } from '../estadoventa';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-estadoventa-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './estadoventa-listar.component.html',
  styleUrl: './estadoventa-listar.component.css'
})
export class EstadoventaListarComponent {
  displayedColumns: string[] = ['idestadoventa', 'estado'];
  estadosventa: Estadoventa[] = []
  constructor(private estadoventaService: EstadoventaService,
    private route: ActivatedRoute,
    private router: Router){
    
  }

  ngOnInit(): void{
    this.estadoventaService.getAllEstadoVenta()
    .subscribe((data)=> {this.estadosventa = data})
  }

  irDetalleEstadoventa(id: string){
    this.router.navigate([id], {relativeTo: this.route})
  }

  isCrearEstadoventa(){
    this.router.navigate(["nuevo"], {relativeTo: this.route})
  }

}
