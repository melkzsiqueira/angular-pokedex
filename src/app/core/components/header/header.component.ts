import { Component, OnInit } from '@angular/core';
import { PoNavbarItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public menu: Array<PoNavbarItem> = [
    {
      label: '',
      action: () => {},
      link: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.menu = [
      {
        label: 'Home',
        action: () => {},
        link: '/home',
      },
    ];
  }
}
