import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogicService } from 'src/services/logic.service';
import { Movie } from 'src/models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private logicService: LogicService
  ) { }

  $movieId: string;
  $movie: Observable<Movie>;
  $recommendedMovies: Observable<Movie>;

  ngOnInit() {
    this.$movieId = this.route.snapshot.paramMap.get('movieId');

    this.logicService.getMovie(this.$movieId).subscribe((response) => {
      this.$movie = response;
    });
  }

}
