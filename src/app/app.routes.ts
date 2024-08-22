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
import { ColaboradorDetalleComponent } from './dashboard/colaborador/colaborador-detalle/colaborador-detalle.component';
import { EstadoventaDetalleComponent } from './dashboard/estadoventa/estadoventa-detalle/estadoventa-detalle.component';
import { MetododepagoDetalleComponent } from './dashboard/metododepago/metododepago-detalle/metododepago-detalle.component';
import { RolDetalleComponent } from './dashboard/rol/rol-detalle/rol-detalle.component';
import { TipodocumentocolaboradorDetalleComponent } from './dashboard/tipodocumentocolaborador/tipodocumentocolaborador-detalle/tipodocumentocolaborador-detalle.component';
import { VentaDetalleComponent } from './dashboard/venta/venta-detalle/venta-detalle.component';
import { ProductoListarComponent } from './dashboard/producto/producto-listar/producto-listar.component';
import { ProductoDetalleComponent } from './dashboard/producto/producto-detalle/producto-detalle.component';
import { DespachoListarComponent } from './dashboard/despacho/despacho-listar/despacho-listar.component';
import { DespachoDetalleComponent } from './dashboard/despacho/despacho-detalle/despacho-detalle.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
    canActivate:[authGuard],
    children: [
        {path: "home", component: HomeComponent},
        {path: "colaborador", component: ColaboradorListarComponent},
        {path: "colaborador/:id", component:ColaboradorDetalleComponent},
        {path: "estadoventa", component: EstadoventaListarComponent},
        {path: "estadoventa/:id", component: EstadoventaDetalleComponent},
        {path: "metododepago", component: MetododepagoListarComponent},
        {path: "metododepago/:id", component: MetododepagoDetalleComponent},
        {path: "rol", component: RolListarComponent},
        {path: "rol/:id", component: RolDetalleComponent},
        {path: "tipodocumentocolaborador", component: TipodocumentocolaboradorListarComponent},
        {path: "tipodocumentocolaborador/:id",component: TipodocumentocolaboradorDetalleComponent},
        {path: "venta", component: VentaListarComponent},
        {path: "venta/:id",component: VentaDetalleComponent},
        {path: "producto", component: ProductoListarComponent},
        {path: "producto/:id", component: ProductoDetalleComponent},
        {path: "despacho",component:DespachoListarComponent},
        {path: "despacho/id", component: DespachoDetalleComponent}
    ]},
    {path: "",redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
