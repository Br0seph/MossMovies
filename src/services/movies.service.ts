import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { MovieSearchResponse } from '../models/movie-search.response';


@Injectable({
    providedIn: 'root',
})
export class MoviesService {

    baseRoute: string;
    apiKey: string;

    // injecting the env values is useful if you're producing multiple modules, sharing the same values,
    // rather than just import env ts files.
    constructor(
        private http: HttpClient,
        @Inject('BaseRoute') baseRoute: string,
        @Inject('ApiKey') apiKey: string
    ) {
        this.baseRoute = baseRoute;
        this.apiKey = apiKey;
    }

    // example req: https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    searchMovies(searchTerm: string): Observable<MovieSearchResponse> {
        const route = this.baseRoute + '3/search/movie' + this.apiKey + '&query=' + encodeURI(searchTerm);

        return this.http.get<MovieSearchResponse>(route)
            .pipe(
                map(response => {
                    return response;
                }),
                catchError(error => {
                    throw Error('Err: ' + error);
                })
            );
    }

    // example req: https://api.themoviedb.org/3/movie/now_playing?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce&language=en-US&page=1
    getCurrentMovies(): Observable<MovieSearchResponse> {
        const route = this.baseRoute + '3/movie/now_playing' + this.apiKey;

        return this.http.get<MovieSearchResponse>(route)
            .pipe(
                map(response => {
                    return response;
                }),
                catchError(error => {
                    throw Error('Err: ' + error);
                })
            );
    }

    // example req: https://api.themoviedb.org/3/movie/550?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce
    getMovie(id: string): Observable<Movie> {
        const route = this.baseRoute + '3/movie/' + id + this.apiKey;

        return this.http.get<Movie>(route)
            .pipe(
                map((response: Movie) => {
                    return response;
                }),
                catchError(error => {
                    throw Error('Err: ' + error);
                })
            );
    }
}
