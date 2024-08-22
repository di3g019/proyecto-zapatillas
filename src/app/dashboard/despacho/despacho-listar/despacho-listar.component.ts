import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Despacho } from '../despacho';
import { DespachoService } from '../despacho.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-despacho-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './despacho-listar.component.html',
  styleUrl: './despacho-listar.component.css'
})
export class DespachoListarComponent {
  displayedColumns: string[] = [
    'iddespacho', 
    'fechadespacho', 
    'estadodespacho', 
    'cliente',
    'direccionDespacho'];
    
    despachos: Despacho[] = []
  
    constructor(private despachoService: DespachoService,
      private route: ActivatedRoute,
      private router: Router){
  
    }
    ngOnInit(): void{
      this.despachoService.getAllDespacho()
      .subscribe((data) => {this.despachos = data})
    }
  
    irDetalleDespacho(id: string){
      this.router.navigate([id], {relativeTo: this.route})
    }
    
    irCrearDespacho(){
      this.router.navigate(["nuevo"], {relativeTo: this.route})
    }
  
  
}
