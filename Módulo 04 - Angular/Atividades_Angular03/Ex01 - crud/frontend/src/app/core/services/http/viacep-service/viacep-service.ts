import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViaCep } from '../../../models/ViaCep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
    
  private url:string = 'viacep.com.br/ws';

  constructor(private http: HttpClient){};

  buscarCEP(cep:string):Observable<ViaCep>{
    const cepLimpo = cep.replace('-', '');
    return this.http.get<ViaCep>(`${this.url}/${cepLimpo}/json`);
  }

}
