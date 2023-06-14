import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from './../agendamento';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})

export class AgendamentoComponent implements OnInit {

  @Input() agendamento: Agendamento ={
    id:0,
    nome:"",
    email:"",
    central:"",
    telefone:"",
    descricao:""
  }

  constructor(){}

  ngOnInit(): void {
  }
  alert(){
    alert('so pra testar')
  }
}
