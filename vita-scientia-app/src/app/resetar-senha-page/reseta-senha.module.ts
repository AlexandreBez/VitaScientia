import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetaSenhaComponent } from './reseta-senha.component';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '../components/spinner/spinner.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../global/services/Usuario.service';
/**
 * Modulo responsavel pelo controle da pagina de resetar senha
 * @author Lucas Alexandre
 * @date 28/12/2023 - 15:34:19
 * @version 2.0.0
 * @export
 * @class ResetaSenhaModule
 * @typedef {ResetaSenhaModule}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 26/12/2023 - 19:04:53
 * @author Lucas Alexandre
 */
@NgModule({
  declarations: [
    ResetaSenhaComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'ResetaSenha/:token', component: ResetaSenhaComponent}
    ])
  ],
  providers: [UsuarioService]
})
export class ResetaSenhaModule { }
