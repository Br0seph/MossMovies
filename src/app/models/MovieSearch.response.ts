import { Movie } from './movie.model';

export class MovieSearchResponse {
    page: string;
    results: Movie[];
    total_pages: string;
    total_results: string;
}
