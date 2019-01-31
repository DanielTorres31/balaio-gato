import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menu = [
    {label: 'Sobre', icon: '', router: ''},
    {label: 'Adoção', icon: '', router: ''},
    {label: 'Apadrinhamento', icon: '', router: ''},
    {label: 'Voluntariado', icon: '', router: ''},
    {label: 'Como Ajudar', icon: '', router: ''},
  ]

  constructor() { }

  ngOnInit() {
  }

}
