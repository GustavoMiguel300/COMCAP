import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit{
  

  formulario!: FormGroup

  nome:string = '';
  sobrenome:string='';
  email:string='';
  documento:string='';
  documentoNum:string='';
  senha:string ='';
  senhaconf:string=''

  constructor(private auth:AuthService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void{
    this.formulario = this.formBuilder.group({
      nome:['',Validators.required],
      sobrenome:['',Validators.required],
      email:['',Validators.required],
      documento:['',Validators.required],
      documentoNum:['',Validators.required],
      senha:['',Validators.required],
      senhaconf:['',Validators.required]
    })
    
    
  }

  cadastrar(){
    
    this.auth.register(this.nome, this.sobrenome, this.email, this.documento, this.documentoNum, this.senha, this.senhaconf)
    
    
  }


}
