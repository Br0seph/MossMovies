import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  menuItems: any[] = [
    {
      SectionName: 'Home',
      Route: 'search',
      Icon: 'home'
    },
    {
      SectionName: 'Current Movies',
      Route: 'movies/current',
      Icon: 'new_releases'
    }
  ];

  ngOnInit() {
  }

}
