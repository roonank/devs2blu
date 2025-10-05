import { Component, signal } from '@angular/core';
import { Page } from "./page/page";

@Component({
  selector: 'app-root',
  imports: [Page],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landingPage');
}
