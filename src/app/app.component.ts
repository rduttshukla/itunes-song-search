import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="form-group">
    <input type="search"
           class="form-control"
           placeholder="Enter search string"
           #search>
  </div>
  <button type="submit" class="btn btn-primary"
          (click)="doSearch(search.value)">
          Search
  </button>
  <ul class="list-group">
  <li class="list-group-item"
      *ngFor="let track of itunes.results.results">
    <img src="{{track.artworkUrl30}}">
    <a target="_blank"
       href="{{track.trackViewUrl}}">{{ track.trackName }}
    </a>
  </li>
</ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;
  constructor(public itunes: SearchService) {}
  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(() => this.loading = false);
    // console.log(this.itunes.search(term));
  }
}
