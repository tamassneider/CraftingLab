import {ChangeDetectionStrategy, Component, DoCheck, OnInit} from '@angular/core';
import {NavbarItemModel} from '../models/navbar-item.model';
import {isDefaultChangeDetectionStrategy} from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements DoCheck {
  navbarItem: NavbarItemModel [];
  isCollapsed = true;

  constructor() {
    this.addItems();
  }
  addItems() {
    this.navbarItem = [
      {
        name: 'Home',
        class: 'normal',
        url: 'home'
      },
      {
        name: 'About Me',
        class: 'normal',
        url: 'about'
      },
      {
        name: 'Journal',
        class: 'normal',
        url: 'journal'
      },
      {
        name: 'Links',
        class: 'normal',
        url: 'links'
      },
      {
        name: 'Downloads',
        class: 'normal',
        url: 'downloads'
      }
    ];
  }

  ngDoCheck(): void {
    console.log('navbar docheck')
  }

}
