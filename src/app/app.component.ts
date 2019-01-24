import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-side-nav-menu></app-side-nav-menu>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'balaio-gato';
}
