import { Component, OnInit } from '@angular/core';
import {HexItemModel} from '../models/hex-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public itemsFirstRow: HexItemModel[];
  public itemsSecondRow: HexItemModel[];

  constructor() {
    this.addItems();
  }

  ngOnInit() {
  }

  addItems() {
    this.itemsFirstRow = [
      {
        name: 'Scrapping',
        description: 'Ez az első menüpont',
        pictureUrl: 'assets/project-image-1.jpg',
        linkUrl: '../scrapping',
      },
      {
        name: 'Cardmaking',
        description: 'Ez az második menüpont',
        pictureUrl: 'assets/project-image-4.jpg',
        linkUrl: '../card-making'
      },
      {
        name: 'Albums',
        description: 'Ez a harmadik menüpont',
        pictureUrl: 'assets/project-image-1.jpg',
        linkUrl: '../albums'
      },
      {
        name: 'Painting',
        description: 'Ez az negyedik menüpont',
        pictureUrl: 'assets/project-image-5.jpg',
        linkUrl: '../painting'
      },
    ];
    this.itemsSecondRow = [
      {
        name: 'Decoupage',
        description: 'Ez az ötödik menüpont',
        pictureUrl: 'assets/project-image-3.jpg',
        linkUrl: '../decoupage'
      },
      {
        name: 'Crochet',
        description: 'Ez a hatodik menüpont',
        pictureUrl: 'assets/project-image-4.jpg',
        linkUrl: '../crochet'
      },
      {
        name: 'ArtyFacts',
        description: 'Ez a hetedik menüpont',
        pictureUrl: 'assets/project-image-5.jpg',
        linkUrl: '../arty-facts'
      },
    ];
  }
}
