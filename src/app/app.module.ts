import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LaddaModule } from 'angular2-ladda';

import { AppComponent } from './app.component';
import { RootModule } from './root/root.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LaddaModule.forRoot({
      style: 'zoom-in'
    }),
    SharedModule.forRoot(),
    AppRoutingModule,
    RootModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
