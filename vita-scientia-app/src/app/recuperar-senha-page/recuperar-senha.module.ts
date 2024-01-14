import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecuperarSenhaComponent } from './recuperar-senha.component';
import { SpinnerModule } from '../components/spinner/spinner.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../global/services/Usuario.service';
/**
 * Modulo responsavel pelo controle da pagina de recuperar senha
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
    RecuperarSenhaComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'RecuperarSenha', component: RecuperarSenhaComponent}
    ])
  ],
  providers:[UsuarioService]
})
export class RecuperarSenhaModule { }
