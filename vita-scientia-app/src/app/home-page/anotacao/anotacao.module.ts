import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotacaoComponent } from './anotacao.component';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { AnotacaoService } from '../../global/services/Anotacao.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/**
 * Modulo responsavel pelo controle da pagina anotacao
 * @author Lucas Alexandre
 * @date 26/12/2023 - 15:12:40
 * @version 2.0.0
 * @export
 * @class AnotacaoModule
 * @typedef {AnotacaoModule}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 26/12/2023 - 15:12:40
 * @author Lucas Alexandre
 */
@NgModule({
  declarations: [
    AnotacaoComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'Anotacoes', component: AnotacaoComponent}
    ])
  ],
  providers: [AnotacaoService]
})
export class AnotacaoModule { }
