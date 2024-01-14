import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos.component';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjetoService } from 'src/app/global/services/Projeto.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
/**
 * Modulo responsavel pelo controle da pagina de projetos
 * @author Lucas Alexandre
 * @date 30/12/2023 - 10:12:04
 * @version 2.0.0
 * @export
 * @class ProjetosModule
 * @typedef {ProjetosModule}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 30/12/2023 - 10:12:04
 * @author Lucas Alexandre
 */
@NgModule({
  declarations: [
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'Projetos', component: ProjetosComponent}
    ]),
    NgSelectModule,
    NgApexchartsModule
  ],
  providers: [ProjetoService]
})
export class ProjetosModule { }
