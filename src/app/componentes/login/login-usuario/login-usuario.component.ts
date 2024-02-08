import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit{

  email:string ='';
  senha:string='';

  constructor(private auth:AuthService){}

  ngOnInit(): void {
  }
  
  login(){
    if(this.email == ''){
      alert('please enter your email')
      return;
    }
    if(this.senha == ''){
      alert('please enter your password')
      return;
    }
    this.auth.login(this.email,this.senha);
    this.email = '';
    this.senha = '';
  }


}


