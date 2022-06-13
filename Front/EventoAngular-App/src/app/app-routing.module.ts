import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EventoDetalheComponent } from './Components/eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './Components/eventos/evento-lista/evento-lista.component';
import { EventosComponent } from './Components/eventos/eventos.component';
import { LoginComponent } from './Components/login/login.component';
import { PalestrantesComponent } from './Components/palestrantes/palestrantes.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { UserComponent } from './Components/user/user.component';
import { TituloComponent } from './shared/nav/titulo/titulo.component';

const routes: Routes = [

  { path: 'user', component: UserComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: UserComponent },
  ]
 },

  { path: 'eventos', redirectTo: 'eventos/lista' },

{
  path: 'eventos', component: EventosComponent,
  children: [
    {path: 'detalhe/:id', component: EventoDetalheComponent},
    {path: 'detalhe', component: EventoDetalheComponent},
    {path: 'lista', component: EventoListaComponent},
  ],

},
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
