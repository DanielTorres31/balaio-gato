import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent implements OnInit {

  constructor(private router: Router) { }

  itensMenu = [
    {name: 'Sobre', routerLink: 'teste1', icon: 'fa fa-address-card'},
    {name: 'Adoção', routerLink: 'teste2', icon: 'fa fa-address-card'},
    {name: 'Apadrinhamento', routerLink: 'teste3', icon: 'fa fa-address-card'},
    {name: 'Voluntariado', routerLink: 'teste1', icon: 'fa fa-address-card'},
    {name: 'Como Ajudar', routerLink: 'teste1', icon: 'fa fa-address-card'},
  ]

  ngOnInit() {
  }

  navigateRoute(route: string) {
    this.router.navigate([route]);
  }

}
