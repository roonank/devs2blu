import { Component } from '@angular/core';
import { Language, TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pagina',
  imports: [TranslateModule],
  templateUrl: './pagina.html',
  styleUrl: './pagina.css'
})
export class Pagina {

  
  // Constructor
  constructor(private translate:TranslateService){

    // Obter o idioma do navegador
    const idiomaNavegador = navigator.language;

  }

  alterarIdioma(idioma:Language) {
    this.translate.use(idioma);
  }
  

}
