import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-listar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './cliente-listar.component.html',
  styleUrl: './cliente-listar.component.css'
})
export class ClienteListarComponent {
  displayedColumns: string[] = [
    'idcliente',
    'username',
    'password',
    'nombrecliente',
    'apellidocliente',
    'emailcliente',
    'fechanacimiento',
    'activo',
    'tipoDocumentoCliente'];

    clientes: Cliente[] = []

  constructor(private ClienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router){

  }
  ngOnInit(): void{
    this.ClienteService.getAllCliente()
    .subscribe((data) => {this.clientes = data})
  }

  irDetalleCliente(id: string){
    this.router.navigate([id], {relativeTo: this.route})
  }

  irCrearCliente(){
    this.router.navigate(["nuevo"], {relativeTo: this.route})
  }


}
