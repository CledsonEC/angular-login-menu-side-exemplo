import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';

// Components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class AccountModule { }