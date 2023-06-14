import { Component, OnInit, ViewChild } from '@angular/core';
import { Agendamento } from '../agendamento';
import { AgendamentoService } from '../agendamento.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-listar-agendamentos',
  templateUrl: './listar-agendamentos.component.html',
  styleUrls: ['./listar-agendamentos.component.css']
})
export class ListarAgendamentosComponent implements OnInit {

  displayedColumn:string[] = ['id','central','nome']

  paginaAtual:number = 1;
  hidePageSize = true;
  showFirstLastButtons = true;

  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort

  dataSource!:MatTableDataSource<Agendamento>
  posts:any



  // listarAgendamentos:Agendamento[] = []

  constructor(private service: AgendamentoService){}

  filtroDePesquisa(event:Event){
   const filterValue = (event.target as HTMLInputElement).value
   this.dataSource.filter = filterValue.trim().toLocaleLowerCase()

   if(this.dataSource.paginator){
    this.dataSource.paginator.firstPage()
   }
  }
  ngOnInit(): void {
    this.service.pegarData().subscribe((listarAgendamento)=>{
      this.posts = listarAgendamento

      //paginator e sort
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort

      //campo de busca


    })
  }


}
