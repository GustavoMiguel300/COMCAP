
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { AgendamentoComponent } from './componentes/agendamentos/agendamento/agendamento.component';
import { ListarAgendamentosComponent } from './componentes/agendamentos/listar-agendamentos/listar-agendamentos.component';
import { ConsultarEquipamentoComponent } from './componentes/agendamentos/consultar-equipamento/consultar-equipamento.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'contato',
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
    path:'Equipamento',
    component:ListarAgendamentosComponent
  },
  {
    path:'consultar-equipamento/:id',
    component:ConsultarEquipamentoComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
