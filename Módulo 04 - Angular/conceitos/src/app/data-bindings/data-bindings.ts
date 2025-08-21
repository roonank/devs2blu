import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  imports: [],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css'
})
export class DataBindings {
  // Imagem
  imagem:string = 'traffic.webp'

  // Função para alterar a imagem
  funcao() : void{
    this.imagem = this.imagem === 'traffic.webp' ? 'night-traffic.jpg' : 'traffic.webp'
  }
}
