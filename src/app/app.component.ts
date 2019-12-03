import { Component } from '@angular/core';
import { ApiService} from './api.service';

export interface ApiResponse {
  results: [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = '';
  title = 'youtube-test';
  videos;

  constructor(public api: ApiService) {

  }

  onClick() {
    this.api.getYoutube(this.input)
      .subscribe(res => {
        this.videos = res;
        console.log(this.videos);
      });
  }
}
