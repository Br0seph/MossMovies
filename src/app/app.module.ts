import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieListTileComponent } from './movie-list-tile/movie-list-tile.component';
import { AppMaterialModule } from './app.material.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MenuComponent } from './menu/menu.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieListTileComponent,
    MovieDetailComponent,
    MenuComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
    AppMaterialModule
  ],
  providers: [
    { provide: 'ApiKey', useValue: environment.apiKey },
    { provide: 'BaseRoute', useValue: environment.baseRoute },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
