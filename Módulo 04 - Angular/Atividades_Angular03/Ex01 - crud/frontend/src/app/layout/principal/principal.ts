import { Component } from '@angular/core';
import { UserForm } from '../../features/users/components/user-form/user-form';
import { UserList } from '../../features/users/components/user-list/user-list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pessoa } from '../../core/models/Pessoa';

@Component({
  selector: 'app-principal',
  imports: [UserForm, UserList],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

  pessoas:Pessoa[] = [];

  cadastrar(pessoa:Pessoa):void{
    this.pessoas.push(pessoa);
  }

  remover(index:number):void{
    this.pessoas.splice(index, 1);
  }
}
