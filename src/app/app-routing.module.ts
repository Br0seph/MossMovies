import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'movie/detail/:movieId',
    component: MovieDetailComponent
  },
  {
    path: '**',
    component: MoviesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
