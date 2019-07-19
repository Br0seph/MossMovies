import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/models/movie.model';

@Component({
  selector: 'app-movie-list-tile',
  templateUrl: './movie-list-tile.component.html',
  styleUrls: ['./movie-list-tile.component.scss']
})
export class MovieListTileComponent implements OnInit {

  constructor() { }

  @Input() movie: Movie;

  ngOnInit() {
  }

  movieBrief(overview: string, maxLength: number): string {

    if (!maxLength) {
      maxLength = 100;
    }

    if (overview.length > maxLength) {
      return overview.substr(0, maxLength) + '...';
    }

    return overview;
  }
}
