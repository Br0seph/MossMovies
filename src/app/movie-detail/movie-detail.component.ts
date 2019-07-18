import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogicService } from '../services/logic.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private logicService: LogicService
  ) { }

  $movieId: string;
  $movie: Observable<Movie>;

  ngOnInit() {
    this.$movieId = this.route.snapshot.paramMap.get('movieId');
    debugger;

    this.logicService.getMovie(this.$movieId).subscribe((response) => {
      this.$movie = response;
    });
  }

}
