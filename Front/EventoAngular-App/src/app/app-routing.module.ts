import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EventoDetalheComponent } from './Components/eventos/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './Components/eventos/evento-lista/evento-lista.component';
import { EventosComponent } from './Components/eventos/eventos.component';
import { PalestrantesComponent } from './Components/palestrantes/palestrantes.component';
import { UserComponent } from './Components/user/user.component';
import { TituloComponent } from './shared/nav/titulo/titulo.component';
import { PerfilComponent } from './Components/user/perfil/perfil.component';
import { LoginComponent } from './Components/user/login/login.component';
import { RegistrationComponent } from './Components/user/registration/registration.component';

const routes: Routes = [

  {path: 'user/perfil', component: PerfilComponent

},

  { path: 'user', component: UserComponent,
  children: [
    { path: 'login', component: LoginComponent }, // login de usuário nome da rota
    { path: 'cadastro', component: RegistrationComponent }, // <-- Criar rota para o cadastro de usuário
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
{path: 'titulo', component: TituloComponent},
{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: '**', redirectTo: '/dashboard'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
