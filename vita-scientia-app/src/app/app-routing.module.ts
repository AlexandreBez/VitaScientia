import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './security/authenticated.guard';
import { AppComponent } from './app.component';

/**
 * Lista de todas as rotas do sistema
 */
const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "",
    loadChildren: () => import('./login-page/login-page.module').then((m) => m.LoginPageModule)
  },
  {
    path: "",
    loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule),
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "",
    loadChildren: () => import('./recover-password/recover-password.module').then((m) => m.RecoverPasswordModule),
  },
  {
    path: "",
    loadChildren: () => import('./reset-password/reset-password.module').then((m) => m.ResetPasswordModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
