import { Component } from '@angular/core';
import { MovieSearchComponent } from '../../Components/movie-search/movie-search.component';
import { MovieListComponent } from '../../Components/movie-list/movie-list.component';

export interface MovieResponse {
  results: Movie[];
}

export interface Movie {
  id: string;
  title: string;
  image: {
    url: string;
  };
  year: number;
}
@Component({
  selector: 'app-second-task',
  standalone: true,
  imports: [MovieSearchComponent, MovieListComponent],
  templateUrl: './second-task.component.html',
  styleUrl: './second-task.component.scss',
})
export class SecondTaskComponent {}
