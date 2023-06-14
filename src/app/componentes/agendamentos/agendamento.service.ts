import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Agendamento } from './agendamento';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private readonly API = 'http://localhost:3000/equipamentos'

  constructor(private http:HttpClient) {}

  listar(pagina: number):Observable<Agendamento[]>{
    const itensPorPagina = 6;

    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", itensPorPagina)

    return this.http.get<Agendamento[]>(this.API,{params})
  }
  selecionar(id:number):Observable<Agendamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Agendamento>(url)
  }
  pegarData(){
    return this.http.get(this.API)
  }

}
