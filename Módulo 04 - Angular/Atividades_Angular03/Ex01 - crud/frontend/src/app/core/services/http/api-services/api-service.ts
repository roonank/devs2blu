import { Observable } from 'rxjs';
import { Pessoa } from '../../../models/Pessoa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
    
  private url:string = 'http://localhost:3000/pessoas';

  constructor(private http:HttpClient){}

  listar():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.url);
  }

  cadastrar(pessoa:Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(this.url, JSON.stringify(pessoa));
  }

  selecionarPessoa(id:string):Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.url}${id}`);
  }

  alterar(pessoa:Pessoa):Observable<Pessoa>{
    return this.http.put<Pessoa>(`${this.url}${pessoa.id}`, JSON.stringify(pessoa));
  }

  remover(id:string):Observable<Pessoa>{
    return this.http.delete<Pessoa>(`${this.url}${id}`);
  }


}