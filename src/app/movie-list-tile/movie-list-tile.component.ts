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

  moviePoster(image: string) {

    if (image) {
      return 'http://image.tmdb.org/t/p/w185//' + image;
    }

    // tslint:disable-next-line: max-line-length
    return 'https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg';
  }

  movieBrief(overview: string, maxLength: number): string {

    if (!overview) {
      return null;
    }

    if (!maxLength) {
      maxLength = 100;
    }

    if (overview.length > maxLength) {
      return overview.substr(0, maxLength) + '...';
    }

    return overview;
  }
}
