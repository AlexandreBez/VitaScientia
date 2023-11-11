import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { RouterModule } from '@angular/router';
import { LoginPageService } from './service/login-page.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '../components/loader/spinner.module';

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
  providers:[LoginPageService]
})
export class LoginPageModule { }
