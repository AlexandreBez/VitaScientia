import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPasswordComponent } from './recover-password.component';
import { SpinnerModule } from '../components/loader/spinner.module';
import { RouterModule } from '@angular/router';
import { RecoverPasswordService } from './service/recover-password.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'RecoverPassword', component: RecoverPasswordComponent}
    ])
  ],
  providers:[RecoverPasswordService]
})
export class RecoverPasswordModule { }
