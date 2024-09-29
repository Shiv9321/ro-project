import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { DashboardProfilePageComponent } from './dashboard-profile-page/dashboard-profile-page.component';
import { DashboardContactPageComponent } from './dashboard-contact-page/dashboard-contact-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'aboutus', component: AboutUsPageComponent },
  { path: 'welcome/:username/profile-page', component: DashboardProfilePageComponent },
  { path: 'welcome/:username/get-in-contact', component: DashboardContactPageComponent },
  { path: '',  component: IndexPageComponent }
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
