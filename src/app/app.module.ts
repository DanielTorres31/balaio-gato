import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { SideNavMenuComponent } from './components/side-nav-menu/side-nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
