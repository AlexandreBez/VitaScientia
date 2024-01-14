import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../global/services/Usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '../components/spinner/spinner.module';
/**
 * Modulo responsavel pelo controle da pagina de login
 * @author Lucas Alexandre
 * @date 26/12/2023 - 19:04:53
 * @version 2.0.0
 * @export
 * @class LoginPageModule
 * @typedef {LoginPageModule}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 26/12/2023 - 19:04:53
 * @author Lucas Alexandre
 */
@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SpinnerModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'Login', component: LoginPageComponent}
    ])
  ],
  providers:[UsuarioService]
})
export class LoginPageModule { }
