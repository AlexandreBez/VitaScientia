import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaToken } from '../guards/ValidaToken.guard';
import { AppComponent } from '../../app.component';

/**
 * Varivel de controle de todas as rotas
 * @date 30/12/2023 - 00:13:04
 * @type {Routes}
 */
const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [ValidaToken]
  },
  {
    path: "",
    loadChildren: () => import('../../login-page/login-page.module').then((m) => m.LoginPageModule)
  },
  {
    path: "",
    loadChildren: () => import('../../home-page/home-page.module').then((m) => m.HomePageModule),
    canActivate: [ValidaToken],
  },
  {
    path: "",
    loadChildren: () => import('../../recuperar-senha-page/recuperar-senha.module').then((m) => m.RecuperarSenhaModule),
  },
  {
    path: "",
    loadChildren: () => import('../../resetar-senha-page/reseta-senha.module').then((m) => m.ResetaSenhaModule),
  },
  {
    path: "",
    loadChildren: () => import('../../components/404/not-found.module').then((m) => m.NotFoundModule),
  },
  { 
    path: '**', 
    redirectTo: '404' 
  }
];

/**
 * Modulo responsavel pelo controle das rotas
 * @author Lucas Alexandre
 * @date 30/12/2023 - 00:13:04
 * @version 2.0.0
 * @export
 * @class RoutingModule
 * @typedef {RoutingModule}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 30/12/2023 - 00:13:04
 * @author Lucas Alexandre
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
