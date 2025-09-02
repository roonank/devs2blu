import { Component, Input } from '@angular/core';
import { Pessoa } from '../../../../core/models/Pessoa';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../core/services/http/api-services/api-service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, MatTableModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

  @Input() vetor:Pessoa[] = [];

  columns:string[] = ["id",
        "nome",
        "email",
        "dataNascimento",
        "genero",
        "rendaSalarial",
        "grauEscolaridade",
        "cep",
        "estado",
        "cidade",
        "bairro",
        "logradouro"];

  constructor(private service:ApiService){};

  ngOnInit():void{
    this.listar();
  }

  listar():void{
    this.service.listar().subscribe(pessoas => this.vetor = pessoas);
  }

}
