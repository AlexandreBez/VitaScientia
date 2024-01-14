import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PesquisasComponent } from './pesquisas.component';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PesquisaService } from '../../global/services/Pesquisa.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProjetoService } from '../../global/services/Projeto.service';
import { NgApexchartsModule } from 'ng-apexcharts';
/**
 * Modulo responsavel pelo controle da pagina de pesquisa
 * @author Lucas Alexandre
 * @date 28/12/2023 - 14:59:20
 * @version 2.0.0
 * @export
 * @class RecuperarSenhaModule
 * @typedef {RecuperarSenhaModule}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 26/12/2023 - 19:04:53
 * @author Lucas Alexandre
 */
@NgModule({
  declarations: [
    PesquisasComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'Pesquisas', component: PesquisasComponent}
    ]),
    NgSelectModule,
    NgApexchartsModule
  ],
  providers: [PesquisaService, CurrencyPipe, ProjetoService]
})
export class PesquisaModule { }
