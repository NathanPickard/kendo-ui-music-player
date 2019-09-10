import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  get headers() {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${environment.spotifySecret}` });
  }

  getAlbums() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10&country=US', {
      headers: this.headers
    });
  }

  getAlbumTracks(id: string) {
    return this.http.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
      headers: this.headers
    });
  }
}
