import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public cultureSelected;

  constructor() { }

  ngOnInit() {
  }

  public logout(): void {
  }

  public changeLanguage(lang: string): void {
  }

}
