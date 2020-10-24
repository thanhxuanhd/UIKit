import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-first-component',
  templateUrl: './sign-up-first-component.component.html',
  styleUrls: ['./sign-up-first-component.component.scss']
})
export class SignUpFirstComponentComponent implements OnInit {

  openTab = 1;
  openTab2 = 1;
  openTab3 = 1;
  openTab4 = 1;
  openTab5 = 1;
  openTab6 = 1;
  openTab7 = 1;
  openTab8 = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number): void {
    this.openTab = $tabNumber;
  }

  toggleTabs2($tabNumber: number): void {
    this.openTab2 = $tabNumber;
  }

  toggleTabs3($tabNumber: number): void {
    this.openTab3 = $tabNumber;
  }

  toggleTabs4($tabNumber: number): void {
    this.openTab4 = $tabNumber;
  }

  toggleTabs5($tabNumber: number): void {
    this.openTab5 = $tabNumber;
  }

  toggleTabs6($tabNumber: number): void {
    this.openTab6 = $tabNumber;
  }

  toggleTabs7($tabNumber: number): void {
    this.openTab7 = $tabNumber;
  }

  toggleTabs8($tabNumber: number): void {
    this.openTab8 = $tabNumber;
  }
}
