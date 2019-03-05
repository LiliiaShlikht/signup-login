import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HighlightLabelDirective } from './highlight-label.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    LoginFormComponent,
    HighlightLabelDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
