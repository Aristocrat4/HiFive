import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../Pages/second-task/second-task.component';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://online-movie-database.p.rapidapi.com/title/v2/find';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<MovieResponse> {
    const params = {
      title: title,
      limit: '10',
      sortArg: 'moviemeter,asc',
    };
    return this.http.get<MovieResponse>(this.apiUrl, { params });
  }
}
