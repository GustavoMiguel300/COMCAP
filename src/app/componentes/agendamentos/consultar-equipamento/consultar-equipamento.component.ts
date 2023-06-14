
import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from '../agendamento';
import { AgendamentoService } from '../agendamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultar-equipamento',
  templateUrl: './consultar-equipamento.component.html',
  styleUrls: ['./consultar-equipamento.component.css']
})



export class ConsultarEquipamentoComponent implements OnInit{

  @Input() agendamento: Agendamento ={
    id:0,
    nome:"",
    email:"",
    central:"",
    telefone:"",
    descricao:""
  }


  constructor(
    private service: AgendamentoService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.selecionar(parseInt(id!)).subscribe((agendamento)=>{
      this.agendamento=agendamento
    })


  }


}
