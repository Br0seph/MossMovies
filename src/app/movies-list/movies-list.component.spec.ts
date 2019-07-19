import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MoviesListComponent } from './movies-list.component';
import { AppMaterialModule } from '../app.material.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MoviesListComponent
      ],
      imports: [
        BrowserAnimationsModule,
        AppMaterialModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        { provide: 'ApiKey', useValue: environment.apiKey },
        { provide: 'BaseRoute', useValue: environment.baseRoute },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
