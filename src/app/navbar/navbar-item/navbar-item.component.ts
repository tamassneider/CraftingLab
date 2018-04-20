import {Component, Input, OnInit} from '@angular/core';
import {NavbarItemModel} from '../../models/navbar-item.model';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {
  @Input() navbarItem: NavbarItemModel;

  constructor() { }

  ngOnInit() {
  }

}
