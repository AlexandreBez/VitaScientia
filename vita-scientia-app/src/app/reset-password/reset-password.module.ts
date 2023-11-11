import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '../components/loader/spinner.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ResetPasswordService } from './service/reset-password.service';



@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'ResetPassword/:token', component: ResetPasswordComponent}
    ])
  ],
  providers: [ResetPasswordService]
})
export class ResetPasswordModule { }
