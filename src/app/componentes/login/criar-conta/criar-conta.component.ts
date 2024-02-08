import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit{
  
  nome:string = '';
  sobrenome:string='';
  email:string='';
  documento:string='';
  documentoNum:string='';
  senha:string ='';
  senhaconf:string=''

  constructor(private auth:AuthService, private router:Route){}

  ngOnInit(): void{}

  cadastrar(){
    if(this.nome == ''){
      alert('porfavor digite seu nome')
      return;
    }
    if(this.sobrenome == ''){
      alert('porfavor digite seu sobrenome')
      return;
    }
    if(this.email == ''){
      alert('porfavor digite seu email')
      return;
    }
    if(this.documento == ''){
      alert('porfavor selecione seu documento')
      return;
    }
    if(this.documentoNum == ''){
      alert('porfavor digite o numero do seu documento')
      return;
    }
    if(this.senha == ''){
      alert('porfavor digite sua senha')
      return;
    }
    if(this.senhaconf == ''){
      alert('porfavor confirme sua senha')
      return;
    }
    this.auth.register(this.nome, this.sobrenome, this.email, this.documento, this.documentoNum, this.senha, this.senhaconf)
    
  }


}
