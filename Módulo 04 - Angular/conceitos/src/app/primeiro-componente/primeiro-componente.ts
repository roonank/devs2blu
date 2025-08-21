import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  imports: [],
  templateUrl: './primeiro-componente.html',
  styleUrl: './primeiro-componente.css'
})
export class PrimeiroComponente {
  //Variavel
  texto:string = 'Aprendendo Angular';

  // Função para retornar um texto
  funcaoTexto() : string{
    return 'Exibindo um texto via função!';
  }
  /* 
  TIPOS DE DADOS - TS
  string  -> texto
  number  -> números
  boolean -> lógicos (true/false)
  any     -> informação flexível

  PARA FUNÇÕES, PODEMOS UTILIZAR VOID
  funcao(): void
  */
  
}
