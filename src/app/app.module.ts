import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationService } from './common/services/authentication/authentication.service';
import { AuthenticationGuardService } from './common/services/authentication/authentication-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './layout/home-layout/home-layout.module#HomeLayoutModule'
      },
      {
        path: '',
        canActivate: [AuthenticationGuardService],
        loadChildren: './layout/app-layout/app-layout.module#AppLayoutModule'
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
