import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { SideNavMenuComponent } from './components/side-nav-menu/side-nav-menu.component';
import { SideNavMenuModule } from './components/side-nav-menu/side-nav-menu.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainMenuModule } from './components/main-menu/main-menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavMenuModule,
    FooterModule,
    MainMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
