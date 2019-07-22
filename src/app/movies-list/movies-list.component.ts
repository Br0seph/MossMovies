import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/models/movie.model';
import { LogicService } from 'src/services/logic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private logicService: LogicService
  ) { }

  $movies: Observable<Movie[]>;

  ngOnInit() {
    const movieListType = this.route.snapshot.paramMap.get('list');

    this.logicService.getMoviesByList(movieListType).subscribe((response) => {
      this.$movies = response.results;
    });
  }
}
