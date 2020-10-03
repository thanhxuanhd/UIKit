import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from '../onboarding/onboarding.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { SignInFirstComponentComponent } from './sign-in-first-component/sign-in-first-component.component';
import { SignUpFirstComponentComponent } from './sign-up-first-component/sign-up-first-component.component';



@NgModule({
  declarations: [OnboardingComponent, SignInFirstComponentComponent, SignUpFirstComponentComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule { }
