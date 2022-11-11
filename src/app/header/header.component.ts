import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


isMenuOpen = false;

toggleMenu(): void{
  this.isMenuOpen = !this.isMenuOpen;
}
}
// how to catch html element in ts?
// HTMLElement el = document.getElementById('content');


// const el: HTMLElement = document.getElementById('content');


// const el: HTMLElement | null = document.getElementById('content');

// if (el) {
//   const definitelyAnElement: HTMLElement = el;
// }


// const el = document.getElementById('content');

// if (el) {
//   const definitelyAnElement = el;
// }


