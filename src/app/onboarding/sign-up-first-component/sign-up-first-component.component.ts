import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-first-component',
  templateUrl: './sign-up-first-component.component.html',
  styleUrls: ['./sign-up-first-component.component.scss']
})
export class SignUpFirstComponentComponent implements OnInit {

  openTab = 1;
  openTab2 = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number): void {
    this.openTab = $tabNumber;
  }

  toggleTabs2($tabNumber: number): void {
    this.openTab2 = $tabNumber;
  }
}
