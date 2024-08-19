import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService){

    }

    irHome(){
      this.router.navigate(["home"], {relativeTo: this.route})
    }
    irVenta(){
      this.router.navigate(["venta"], {relativeTo: this.route})
    }
    irEstadoventa(){
      this.router.navigate(["estadoventa"], {relativeTo: this.route})
    }
    irColaborador(){
      this.router.navigate(["colaborador"], {relativeTo: this.route})
    }
    irMetododepago(){
      this.router.navigate(["metododepago"], {relativeTo: this.route})
    }
    irTipoDocumentoColaborador(){
      this.router.navigate(["tipodocumentocolaborador"], {relativeTo: this.route})
    }
    irRol(){
      this.router.navigate(["rol"], {relativeTo: this.route})
    }

    salir(){
      this.authService.logout()
      this.router.navigateByUrl("/login")
    }
    
}
