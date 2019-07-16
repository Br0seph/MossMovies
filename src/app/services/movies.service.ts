import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class MoviesService {

    constructor(private http: HttpClient) {
    }

    // example req: https://api.themoviedb.org/3/movie/550?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce
    getMovies(): Observable<any> {
        const apiKey = '?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce';
        const baseRoute = 'https://api.themoviedb.org/';

        const route = baseRoute + '3/movie/550' + apiKey;

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
