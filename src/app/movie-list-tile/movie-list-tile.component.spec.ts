import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListTileComponent } from './movie-list-tile.component';

describe('MovieListTileComponent', () => {
  let component: MovieListTileComponent;
  let fixture: ComponentFixture<MovieListTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('says hello', () => {
    expect(this.movieBrief('hello!', 5))
        .toEqual('hello');
  });
});
