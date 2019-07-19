import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListTileComponent } from './movie-list-tile.component';
import { AppMaterialModule } from '../app.material.module';
import { RouterModule } from '@angular/router';
import { Movie } from 'src/models/movie.model';

describe('MovieListTileComponent', () => {
  let component: MovieListTileComponent;
  let fixture: ComponentFixture<MovieListTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListTileComponent ],
      imports: [
        AppMaterialModule,
        RouterModule.forRoot([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListTileComponent);
    component = fixture.componentInstance;
    component.movie = new Movie();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trim the movie overview with an ellipsis', () => {
    const trimmed = component.movieBrief('hello!!!!!!!!!!!!!!!!', 5);
    expect(trimmed).toEqual('hello...');
  });

  it('should return a default poster image', () => {
    const moviePoster = component.moviePoster(undefined);
    // tslint:disable-next-line: max-line-length
    expect(moviePoster).toEqual('https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg');
  });

  it('should return the actual movie poster image', () => {
    const moviePoster = component.moviePoster('100');
    expect(moviePoster).toEqual('http://image.tmdb.org/t/p/w185//100');
  });
});
