import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  @Input() tracks: [];
  @Input() currentAlbum: any;

  constructor() { }

  ngOnInit() {
  }

  get albumCover() {
    const { images } = this.currentAlbum;
    const [image] = images;
    return image;
  }

  get albumArtist() {
    const { artists } = this.currentAlbum;
    const [artist] = artists;
    return artist;
  }

}
