import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhes',
  imports: [],
  templateUrl: './produto-detalhes.html',
  styleUrl: './produto-detalhes.css'
})
export class ProdutoDetalhes {

  codigo:number = 0;

  constructor(private ar:ActivatedRoute){}

  ngOnInit():void{
    this.codigo = Number(this.ar.snapshot.paramMap.get('codigo'));

    this.ar.paramMap.subscribe(p => this.codigo = Number(p.get('codigo')));
  }
}
