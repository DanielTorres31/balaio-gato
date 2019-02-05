import { Component, OnInit, HostListener } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  mobile: boolean;

  menu = [
    {label: 'Sobre', icon: '', router: ''},
    {label: 'Adoção', icon: '', router: ''},
    {label: 'Apadrinhamento', icon: '', router: ''},
    {label: 'Voluntariado', icon: '', router: ''},
    {label: 'Como Ajudar', icon: '', router: ''},
  ];

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.mobile = this.app.mobile;
  }

}
