import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Rol } from '../rol';
import { RolService } from '../rol.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rol-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rol-listar.component.html',
  styleUrl: './rol-listar.component.css'
})
export class RolListarComponent {
  
  displayedColumns: string[] = ['idrol', 'nombrerol'];

  roles: Rol[] = []

  constructor(
    private rolService : RolService,
    private route: ActivatedRoute,
    private router: Router){}


    ngOnInit():void{
      this.rolService.getAllRol()
      .subscribe((data)=>{this.roles = data})
    }

    irDetalleRol(id: string){
      this.router.navigate([id], {relativeTo: this.route})
    }
  
    irCrearRol(){
      this.router.navigate(["nuevo"], {relativeTo: this.route})
    }

}
