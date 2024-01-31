
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { AgendamentoComponent } from './componentes/agendamentos/agendamento/agendamento.component';
import { ListarAgendamentosComponent } from './componentes/agendamentos/listar-agendamentos/listar-agendamentos.component';
import { ConsultarEquipamentoComponent } from './componentes/agendamentos/consultar-equipamento/consultar-equipamento.component';
import { HistoricoComponent } from './componentes/artigos/historico/historico.component';
import { SobreComcapComponent } from './componentes/artigos/sobre-comcap/sobre-comcap.component';
import { LoginUsuarioComponent } from './componentes/login/login-usuario/login-usuario.component';
import { LoginColaboradorComponent } from './componentes/login/login-colaborador/login-colaborador.component';
import { CriarContaComponent } from './componentes/login/criar-conta/criar-conta.component';
import { TesteFormComponent } from './componentes/login/teste-form/teste-form.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'contato',
    component:ListarAgendamentosComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Perfil',
    component:PerfilComponent
  },
  {
    path:'Sobre',
    component:SobreComponent
  },
  {
    path:'Sobre/artigo/sobreComcap',
    component:SobreComcapComponent
  },
  {
    path:'Sobre/artigo/historico',
    component:HistoricoComponent
  },

  {
    path:'Equipamento',
    component:ListarAgendamentosComponent
  },
  {
    path:'consultar-equipamento/:id',
    component:ConsultarEquipamentoComponent
  },
  {
    path:'login',
    component:LoginUsuarioComponent
  },
  {
    path:'loginColaborador',
    component:LoginColaboradorComponent
  },
  {
    path:'cadastrar',
    component:CriarContaComponent
  },
  {
    path:'teste-form',
    component:TesteFormComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
