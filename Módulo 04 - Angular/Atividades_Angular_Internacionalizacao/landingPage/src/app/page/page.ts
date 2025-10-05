import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page',
  imports: [TranslateModule],
  templateUrl: './page.html',
  styleUrl: './page.css'
})
export class Page {

  constructor(private translate:TranslateService){

    const idiomaNavegador = navigator.language;

  }

}
