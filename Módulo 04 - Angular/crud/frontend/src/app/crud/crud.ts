import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Pessoa } from '../modelo/Pessoa';
import { PessoaApi } from '../servicos/pessoa-api';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, ReactiveFormsModule, MatTableModule, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './crud.html',
  styleUrl: './crud.css'
})
export class Crud {

  //Visivilidade dos botões
  btnCadastrar:boolean = true;

  // Objeto do formulário reativo
  formularioPessoa = new FormGroup({
    id      : new FormControl(),
    nome    : new FormControl(),
    cidade  : new FormControl()
  });

  // Colunas da tabela
  colunas:String[] = ['id', 'nome', 'cidade', 'selecionar']

  // Vetor para armazenar as pessoas
  vetor:Pessoa[] = [];

  // Construtor
  constructor(private servico:PessoaApi){}

  // ngOnInit - Executa este método quando o componente for montado
  ngOnInit():void{
    this.listar();

    this.servico.selecionarPessoa
  }
  
  listar():void{
    this.servico.listar().subscribe(pessoas => this.vetor = pessoas);
  }

  //Método para cadastrar pessoas
  cadastrar():void{
    //1ª maneira
   // const obj = {
     // nome: this.formularioPessoa.value.nome,
      //cidade: this.formularioPessoa.value.cidade
    //}


    //2ª maneira (spred operator)
    let obj = {...this.formularioPessoa.value};
    delete obj.id;
    
    
    //Realizar o cadastro
    this.servico.cadastrar(obj).subscribe(pessoa => this.vetor = [...this.vetor, pessoa]);

    //limpar o formulário
    this.formularioPessoa.reset();
  }

  // Método para selecionar uma pessoa específica
  selecionarPessoa(id:string):void{
    this.servico.selecionarPessoa(id)
    .subscribe(pessoa =>{
     //1ª maneira
     // this.formularioPessoa.get('id')?.setValue(pessoa.id);
     // this.formularioPessoa.get('nome')?.setValue(pessoa.nome);
     // this.formularioPessoa.get('cidade')?.setValue(pessoa.cidade);

     this.formularioPessoa.patchValue(pessoa);

     this.btnCadastrar = false;
    });    
  }

  //Método para cancelar as ações de alteração e remoção
  cancelar():void {
    this.formularioPessoa.reset();
    this.btnCadastrar = true;
  }

  alterar():void{
    this.servico.alterar(this.formularioPessoa.value)
    .subscribe(pessoa =>{

        // Obter o índice da pessoa alterada no vetor
        const indicePessoaAlterada = this.vetor.findIndex(obj => obj.id === pessoa.id);

        //Atualizar valor do vetor
        this.vetor[indicePessoaAlterada] = pessoa;

        //Forçar a atualização do vetor
        this.vetor = [...this.vetor];

        // Reset do formulário e limpeza de campos
        this.cancelar();
    });    
  }
  
  // Método para remover pessoas
  remover():void{
    this.servico.remover(this.formularioPessoa.value.id)
    .subscribe(pessoa => {
        // Obter o índice da pessoa removida no vetor
        const indicePessoaRemovida = this.vetor.findIndex(obj => obj.id === pessoa.id);

        //Efetura a remoção no vetor
        this.vetor.splice(indicePessoaRemovida, 1);

         //Forçar a atualização do vetor
        this.vetor = [...this.vetor];

        // Reset do formulário e limpeza de campos
        this.cancelar();
    })   
  }

}
