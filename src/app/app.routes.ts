import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ColaboradorListarComponent } from './dashboard/colaborador/colaborador-listar/colaborador-listar.component';
import { EstadoventaListarComponent } from './dashboard/estadoventa/estadoventa-listar/estadoventa-listar.component';
import { MetododepagoListarComponent } from './dashboard/metododepago/metododepago-listar/metododepago-listar.component';
import { RolListarComponent } from './dashboard/rol/rol-listar/rol-listar.component';
import { TipodocumentocolaboradorListarComponent } from './dashboard/tipodocumentocolaborador/tipodocumentocolaborador-listar/tipodocumentocolaborador-listar.component';
import { VentaListarComponent } from './dashboard/venta/venta-listar/venta-listar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
    canActivate:[authGuard],
    children: [
        {path: "home", component: HomeComponent},
        {path: "colaborador", component: ColaboradorListarComponent},
        {path: "estadoventa", component: EstadoventaListarComponent},
        {path: "metododepago", component: MetododepagoListarComponent},
        {path: "rol", component: RolListarComponent},
        {path: "tipodocumentocolaborador", component: TipodocumentocolaboradorListarComponent},
        {path: "venta", component: VentaListarComponent}
    ]},
    {path: "",redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
