import { Component, signal } from '@angular/core';
import { DataBindings } from "./data-bindings/data-bindings";
import { Formulario } from "./formulario/formulario";
import { FormularioReativo } from './formulario-reativo/formulario-reativo';
import { Roteamento } from "./roteamento/roteamento";

@Component({
  selector: 'app-root',
  imports: [Roteamento],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conceitos');
}
