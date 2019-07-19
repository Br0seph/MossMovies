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

  // it('says hello', () => {
  //   expect(this.movieBrief('hello!', 5))
  //       .toEqual('hello');
  // });
});
