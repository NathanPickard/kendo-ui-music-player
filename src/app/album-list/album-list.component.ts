import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  @Input() albums: [] = [];
  @Output() albumSelected = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  onAlbumSelected(album) {
    this.albumSelected.emit(album);
  }

}
