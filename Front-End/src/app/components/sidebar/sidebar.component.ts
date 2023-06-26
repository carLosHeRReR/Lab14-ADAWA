import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/vuelo', title: 'Vuelo',  icon:'location_world', class: '' },
    { path: '/tripulacion', title: 'Tripulacion',  icon:'business_badge', class: '' },
    { path: '/avion', title: 'Avion',  icon: 'ui-1_send', class: '' },
    { path: '/piloto', title: 'Piloto',  icon:'users_single-02', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
