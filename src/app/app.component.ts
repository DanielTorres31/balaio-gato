import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app-background-color">
      <app-side-nav-menu></app-side-nav-menu>
      <router-outlet class="app-background-color"></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'balaio-gato';
}
