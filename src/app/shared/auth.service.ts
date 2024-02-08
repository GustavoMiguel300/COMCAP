import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private fireauth:AngularFireAuth, private router:Router) { }

  // Login method
  login(email:string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['/Home'])
    }, err =>{
      alert(err.message);
      this.router.navigate(['/login'])
    })
  }

  //Register method
  register(nome: string, sobrenome: string, email:string, documento:string, documentoNum: string, senha:string, senhaconf:string){
    this.fireauth.createUserWithEmailAndPassword(email,senha).then(()=>{
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message);
      this.router.navigate(['/cadastrar'])
    })
  }

  //logout method
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message)
    })
  }
  
}

