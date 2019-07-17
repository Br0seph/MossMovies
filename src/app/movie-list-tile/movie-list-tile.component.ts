import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list-tile',
  templateUrl: './movie-list-tile.component.html',
  styleUrls: ['./movie-list-tile.component.sass']
})
export class MovieListTileComponent implements OnInit {

  constructor() { }

  @Input() movie: Movie;

  ngOnInit() {
  }

}
