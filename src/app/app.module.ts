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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
import { SobreComcapComponent } from './componentes/artigos/sobre-comcap/sobre-comcap.component';
import { HistoricoComponent } from './componentes/artigos/historico/historico.component';
import { LoginUsuarioComponent } from './componentes/login/login-usuario/login-usuario.component';
import { LoginColaboradorComponent } from './componentes/login/login-colaborador/login-colaborador.component';
import { CriarContaComponent } from './componentes/login/criar-conta/criar-conta.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat'



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
    SobreComcapComponent,
    HistoricoComponent,
    LoginUsuarioComponent,
    LoginColaboradorComponent,
    CriarContaComponent,


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
    MatInputModule,
    MatSidenavModule,
    MatCheckboxModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
