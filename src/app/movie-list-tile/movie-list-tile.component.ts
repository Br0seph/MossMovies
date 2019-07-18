import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

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

  movieBrief(overview: string): string {

    if (overview.length > 100) {
      return overview.substr(0, 100) + '...';
    }

    return overview;
  }
}
