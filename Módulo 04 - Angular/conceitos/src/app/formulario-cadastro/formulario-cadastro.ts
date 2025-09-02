import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventManager } from '@angular/platform-browser';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-formulario-cadastro',
  imports: [FormsModule],
  templateUrl: './formulario-cadastro.html',
  styleUrl: './formulario-cadastro.css'
})
export class FormularioCadastro {
    
  
    nome:string = '';
    cidade:string = '';

    @Output() adicionar = new EventEmitter<Pessoa>();

    cadastrar():void{
      let p = new Pessoa();
      p.nome = this.nome;
      p.cidade = this.cidade;

      this.adicionar.emit(p);

      this.nome = '';
      this.cidade = '';
    }
}
