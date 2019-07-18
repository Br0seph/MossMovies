import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class MoviesService {

    apiKey = '?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce';
    baseRoute = 'https://api.themoviedb.org/';

    constructor(private http: HttpClient) {

    }

    // example req: https://api.themoviedb.org/3/movie/550?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce
    // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    searchMovies(searchTerm: string): Observable<any> {
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
}
