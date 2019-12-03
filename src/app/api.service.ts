import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  apiKey = 'AIzaSyAYLMkU9lmHJG8TMcWra6NY94k9VZNk6WY';
  baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q='; // Insert search term after q
  constructor(public httpClient: HttpClient) { }

  getYoutube(query) {
    const searchUrl = `${this.baseUrl}${query}&key=${this.apiKey}`;
    return this.httpClient.get(searchUrl);
  }
}
