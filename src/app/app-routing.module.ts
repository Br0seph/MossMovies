import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

const routes: Routes = [
  {
    path: 'search',
    component: MovieSearchComponent
  },
  {
    path: 'movies/:list',
    component: MoviesListComponent
  },
  {
    path: 'movie/detail/:movieId',
    component: MovieDetailComponent
  },
  {
    path: '**',
    component: MovieSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
