import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-tabela-listagem',
  imports: [],
  templateUrl: './tabela-listagem.html',
  styleUrl: './tabela-listagem.css'
})
export class TabelaListagem {
  @Input() vetor:Pessoa[] = [];

  @Output() excluir = new EventEmitter<number>();

  remover(indice:number):void{
      this.excluir.emit(indice);
  }


}
