import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  toggleMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  expandMenu($event): void {
    $event.preventDefault();
    this.toggleMenu = !this.toggleMenu;
  }
}
