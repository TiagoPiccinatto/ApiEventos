import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EventosComponent } from './Components/eventos/eventos.component';
import { PalestrantesComponent } from './Components/palestrantes/palestrantes.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { TituloComponent } from './shared/nav/titulo/titulo.component';

const routes: Routes = [
{path: 'Eventos', component: EventosComponent},
{path: 'contatos', component: ContatosComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'palestrantes', component: PalestrantesComponent},
{path: 'perfil', component: PerfilComponent},
{path: 'titulo', component: TituloComponent},
{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: '**', redirectTo: '/dashboard'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
