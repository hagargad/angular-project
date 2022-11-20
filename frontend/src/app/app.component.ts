import { Component } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tickets Marche';
  show_footer:boolean=true;
  show_header:boolean=true;


  constructor( private router: Router) {

    this.router.events.subscribe(
          (event: any) => {
            console.log(event)
            if (event instanceof NavigationEnd) {
              if (this.router.url == '/admin') {
                this.show_footer = false;
                this.show_header = false;
    }
  }
    }
    )
  }
}
