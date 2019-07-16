import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Observable } from 'rxjs';
import { LogicService } from '../services/logic.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass']
})
export class MoviesListComponent implements OnInit {

  constructor(private logicService: LogicService) { }

  $movies: Observable<Movie[]>;

  ngOnInit() {
    this.logicService.getAllMovies().subscribe(data => {
      debugger;
      this.$movies = data;
    });
  }

}
