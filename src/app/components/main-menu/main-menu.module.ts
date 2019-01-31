import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    MainMenuComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
  ],
  exports: [
    MainMenuComponent,
  ]
})
export class MainMenuModule { }
