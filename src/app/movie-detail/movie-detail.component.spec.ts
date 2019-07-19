import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { AppMaterialModule } from '../app.material.module';
import { LogicService } from 'src/services/logic.service';
import { RouterModule } from '@angular/router';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailComponent],
      imports: [
        AppMaterialModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers: [
        LogicService,
        { provide: 'ApiKey', useValue: environment.apiKey },
        { provide: 'BaseRoute', useValue: environment.baseRoute },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
