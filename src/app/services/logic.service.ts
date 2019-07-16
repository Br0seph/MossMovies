import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MoviesService } from './movies.service';

@Injectable({
    providedIn: 'root',
})
export class LogicService {

    constructor(private moviesService: MoviesService) {
    }

    // Returns all movies
    getAllMovies(): Observable<any> {
        return this.moviesService.getMovies().pipe(
            map(response => {
                return response;
            })
        );
    }
}
