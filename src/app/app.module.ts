import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { EquipamentoComponent } from './componentes/contato/equipamento/equipamento.component';
import { ListarEquipamentoComponent } from './componentes/contato/listar-equipamento/listar-equipamento.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { AgendamentoComponent } from './componentes/agendamentos/agendamento/agendamento.component';
import { ListarAgendamentosComponent } from './componentes/agendamentos/listar-agendamentos/listar-agendamentos.component';
import { ConsultarEquipamentoComponent } from './componentes/agendamentos/consultar-equipamento/consultar-equipamento.component';
import { HeaderCurtoComponent } from './componentes/header-curto/header-curto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    EquipamentoComponent,
    ListarEquipamentoComponent,
    BarraLateralComponent,
    MenuLateralComponent,
    HomeComponent,
    PerfilComponent,
    AgendamentoComponent,
    SobreComponent,
    ListarAgendamentosComponent,
    ConsultarEquipamentoComponent,
    HeaderCurtoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatBadgeModule,
    MatDividerModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
