import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Notas } from './notas/notas';

@Component({
  selector: 'app-root',
  imports: [Notas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes');
}
