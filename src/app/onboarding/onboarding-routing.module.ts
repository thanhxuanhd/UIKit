import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { SignInFirstComponentComponent } from './sign-in-first-component/sign-in-first-component.component';
import { SignUpFirstComponentComponent } from './sign-up-first-component/sign-up-first-component.component';

const routes: Routes = [
  {
    path: '', component: OnboardingComponent,
    children: [
      { path: '', redirectTo: 'signinfirst', pathMatch: 'full' },
      { path: 'signinfirst', component: SignInFirstComponentComponent },
      { path: 'signupfirst', component: SignUpFirstComponentComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
