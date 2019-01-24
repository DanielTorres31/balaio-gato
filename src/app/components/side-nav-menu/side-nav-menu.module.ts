import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavMenuComponent } from './side-nav-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    SideNavMenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [
    SideNavMenuComponent,
  ]
})
export class SideNavMenuModule { }
