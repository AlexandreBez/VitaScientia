import { Component, HostListener } from '@angular/core';

/**
 * Componente possuindo as funções para a pagina 404
 * @author Lucas Alexandre
 */
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  /**
   * Função de controle da animação do ponteiro do mouse no fundo
   * dando uma ilusão dos icones se movendo
   * @param {MouseEvent} event
   * @returns {void}
   */
  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    var container = document.getElementsByClassName("container")[0] as HTMLElement;
    const x = -event.clientX / 5;
    const y = -event.clientY / 5;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
  }
}
