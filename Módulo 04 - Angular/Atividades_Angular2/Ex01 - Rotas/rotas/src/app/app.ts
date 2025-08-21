import { Component, signal } from '@angular/core';
import { Routing } from './routing/routing';

@Component({
  selector: 'app-root',
  imports: [Routing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rotas');
}
