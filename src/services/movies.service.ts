import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { MovieSearchResponse } from '../models/MovieSearch.response';


@Injectable({
    providedIn: 'root',
})
export class MoviesService {

    // TODO: Should put this in environment.ts files so it's possible to run difference endpoints/apikeys. But... time.
    apiKey = '?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce';
    baseRoute = 'https://api.themoviedb.org/';

    constructor(private http: HttpClient) {
    }

    // example req: https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    searchMovies(searchTerm: string): Observable<MovieSearchResponse> {
        const route = this.baseRoute + '3/search/movie' + this.apiKey + '&query=' + encodeURI(searchTerm);

        return this.http.get<any>(route)
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

        return this.http.get<any>(route)
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

        return this.http.get<any>(route)
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
