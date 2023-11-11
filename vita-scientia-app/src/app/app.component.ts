import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


/**
 *  App main e o ponto inicial do projeto e o qual Angular usa para renderizar
 *  @author Lucas Alexandre
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(
    private router: Router
  ){}

}
