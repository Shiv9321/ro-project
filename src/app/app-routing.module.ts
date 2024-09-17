import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: '',  component: IndexPageComponent }
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
