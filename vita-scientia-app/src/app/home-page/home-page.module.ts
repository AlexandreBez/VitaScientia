import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AnotacaoModule } from './anotacao/anotacao.module';
import { RouterModule } from '@angular/router';
import { ValidaToken } from '../global/guards/ValidaToken.guard';
import { ValidaTempoRestanteToken } from '../global/guards/ValidaTempoRestanteToken.guard';
import { UsuarioService } from '../global/services/Usuario.service';
/**
 * Modulo responsavel pelo controle da pagina de recuperar senha
 * @author Lucas Alexandre
 * @date 28/12/2023 - 16:19:16
 * @version 2.0.0
 * @export
 * @class HomePageModule
 * @typedef {HomePageModule}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 28/12/2023 - 16:19:16
 * @author Lucas Alexandre
 */
@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AnotacaoModule,
    RouterModule.forChild([
      {
        path: 'Home',
        component: HomePageComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./anotacao/anotacao.module').then(
                (m) => m.AnotacaoModule
              ),
            canActivate: [ValidaToken, ValidaTempoRestanteToken],
          },
          {
            path: '',
            loadChildren: () =>
              import('./pesquisas/pesquisa.module').then(
                (m) => m.PesquisaModule
              ),
            canActivate: [ValidaToken, ValidaTempoRestanteToken],
          },
          {
            path: '',
            loadChildren: () =>
              import('./projetos/projetos.module').then(
                (m) => m.ProjetosModule
              ),
            canActivate: [ValidaToken, ValidaTempoRestanteToken],
          },
        ],
      },
    ]),
  ],
  providers: [UsuarioService]
})
export class HomePageModule {}
