import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CustomValidators } from 'ng2-validation';
import { FormComponent } from '../../../shared/components/form/form.component';
// import { AuthService } from './../../../shared/services/auth.service';
// import { SettingsService } from './../../../shared/services/settings.service';
// import { FormComponent } from './../../../shared/components/form/form.component';

// import { NotificationResult } from './../../../shared/models/notification-result';
// import { RootStore } from '../../../root/stores/root.store';
// import { environment } from 'environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent extends FormComponent implements OnInit, OnDestroy {

   private ngUnsubscribe: Subject<void> = new Subject<void>();

  // // public urlAplicacao: string = environment.urlAplicacao;
   public formGroup: FormGroup;
  // // public result: NotificationResult;
  // public cultureSelected;
  // loginStatus = '';

  // _gbErroLogin: boolean = false;

   constructor(
     private router: Router,
     private fb: FormBuilder,
  //   // authService: AuthService,
  //   // settingsService: SettingsService,
  //   // private rootStore: RootStore
     ) {
       super();
  //   // super(authService, settingsService);
  //   this.isLoading = false;
   }

   ngOnInit() {
  //   // this.cultureSelected = this.settingsService.locale;

     var divLogin = document.getElementsByTagName('app-simple-layout') as HTMLCollectionOf<HTMLElement>;
     if (divLogin)
       divLogin.item(0).style.height = "100%";

     this.buildFormGroup();
   }

   ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  }

  private buildFormGroup(): void {
    this.formGroup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

   public login(): void {
  //   this.submitted = true;
  //   if (this.formGroup.valid) {
  //     this.isLoading = true;
  //     const user = this.formGroup.value;
  //     // this.authService.logon(user).takeUntil(this.ngUnsubscribe).subscribe(result => {
  //     //   if (!result.isValid) {
  //     //     this.result = result;
  //     //     this.isLoading = false;
  //     //     if (result.errors.length > 0) {
  //     //       this._gbErroLogin = true;
  //     //     }
  //     //   }
  //     //   else{
  //     //     this.authService.authentication(result, user.remember);
  //     //       if (result.isValid) {
  //     //         this.authService.loadUser(true);
  //     //         this.authService.loadPermissions(true);
  //     //       }
  //     //   }
  //     // },
  //     //   error => {
  //     //     this.isLoading = false;
  //     //     this._gbErroLogin = true;
  //     //   });
  //   }
   }
}
