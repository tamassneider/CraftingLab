import { Component, OnInit } from '@angular/core';
import {HexItemModel} from '../models/hex-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items: HexItemModel[] ;

  constructor() {
    this.addItems();
  }

  ngOnInit() {
    console.log(this.items);
  }

  addItems() {
    this.items = [
      {
        name: 'Első Menüpont',
        description: 'Ez az első menüpont',
        pictureUrl: 'assets/project-image-1.jpg'
      },
      {
        name: 'Második Menüpont',
        description: 'Ez az második menüpont',
        pictureUrl: 'assets/project-image-4.jpg'
      },
      {
        name: 'Haramdik Menüpont',
        description: 'Ez a harmadik menüpont',
        pictureUrl: 'assets/project-image-3.jpg'
      },
      {
        name: 'Negyedik Menüpont',
        description: 'Ez az negyedik menüpont',
        pictureUrl: 'assets/project-image-4.jpg'
      },
      {
        name: 'Ötödik Menüpont',
        description: 'Ez az ötödik menüpont',
        pictureUrl: 'assets/project-image-5.jpg'
      },
      {
        name: 'Hatodik Menüpont',
        description: 'Ez a hatodik menüpont',
        pictureUrl: 'assets/project-image-5.jpg'
      },
      {
        name: 'Hetedik Menüpont',
        description: 'Ez a hetedik menüpont',
        pictureUrl: 'assets/project-image-3.jpg'
      },
    ];
  }
}
