import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'balaio-gato';
}
