import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements AfterViewInit {

  constructor(private _cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this._cdr.detach();
  }

}
