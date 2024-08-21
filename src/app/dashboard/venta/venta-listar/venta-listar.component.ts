import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Venta } from '../venta';
import { VentaService } from '../venta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-venta-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './venta-listar.component.html',
  styleUrl: './venta-listar.component.css'
})
export class VentaListarComponent {
  displayedColumns: string[] = ['idventa', 'fecha', 'descuento', 'total','igv','estadoVenta'];

  ventas : Venta[] = []

  constructor(private ventaService: VentaService,
    private route: ActivatedRoute,
    private router: Router){

  }
  ngOnInit(): void{
    this.ventaService.getAllVenta()
    .subscribe((data) => {this.ventas = data})
  }

  irDetalleVenta(id: string){
    this.router.navigate([id], {relativeTo: this.route})
  }
  
  irCrearVenta(){
    this.router.navigate(["nuevo"], {relativeTo: this.route})
  }






}
