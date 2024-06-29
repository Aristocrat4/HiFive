import { Component } from '@angular/core';
import { Movie } from '../../Pages/second-task/second-task.component';
import { MovieService } from '../../services/movie.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MovieListComponent,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss',
})
export class MovieSearchComponent {
  searchTerm: string = '';
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    this.movieService.searchMovies(this.searchTerm).subscribe(
      (response) => {
        this.movies = response.results;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}
