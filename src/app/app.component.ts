import { Component, HostListener, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {

  public mobile: boolean;

  title = 'balaio-gato';


  ngOnInit() {
    this.isMobile(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile(event.target.innerWidth);
  }

  private isMobile(windowWidth: number) {
    if (windowWidth > 800) {
       this.mobile = false;
    } else {
      this.mobile = true;
    }
  }
}
