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

    // Search for movies.
    search(searchTerm: string): Observable<any> {
        searchTerm = this.hughBeGone(searchTerm);

        return this.moviesService.searchMovies(searchTerm).pipe(
            map(response => {
                return response;
            })
        );
    }

    // Get movies currently in the theatre.
    getCurrentMovies(): Observable<any> {
        return this.moviesService.getCurrentMovies().pipe(
            map(response => {
                return response;
            })
        );
    }

    // Get an individual movie.
    getMovie(id: string): Observable<any> {
        return this.moviesService.getMovie(id).pipe(
            map(response => {
                return response;
            })
        );
    }

    // Dude has no place in movies.
    hughBeGone(searchTerm: string): string {
        const hughCheck = searchTerm.toLocaleLowerCase();

        if (hughCheck.includes('hugh') && hughCheck.includes('grant')) {
            searchTerm = 'Mulan'; // thank me later => *spoilers*.... she saves China
        }

        return searchTerm;
    }
}
