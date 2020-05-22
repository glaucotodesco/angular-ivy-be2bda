import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  name = 'Eletiva WEB com Angular Versão' + VERSION.major;
  test = 'Segundo atributo';

  
}
