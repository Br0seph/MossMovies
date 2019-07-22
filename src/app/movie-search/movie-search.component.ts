import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/services/logic.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/models/movie.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  constructor(private logicService: LogicService) { }

  $movies: Observable<Movie[]>;
  searchText: string;
  hasSearched = false;

  ngOnInit() {
  }

  searchMovies() {
    this.hasSearched = true;

    if (!this.searchText) {
      return;
    }

    this.logicService.search(this.searchText).subscribe((response) => {
      if (response && response.results.length > 0) {
        this.$movies = response.results;
      } else {
        this.$movies = null;
      }
    });
  }

  getCurrentMovies() {
    this.logicService.getCurrentMovies().subscribe((response) => {
      this.$movies = response.results;
    });
  }

  clearSearch() {
    this.$movies = null;
    this.searchText = null;
  }

}
