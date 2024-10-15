import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OmdbService } from '../services/omdb.service';
import { EventEmitter } from 'stream';
import { MoviePreviewComponent } from '../movie-preview/movie-preview.component';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MoviePreviewComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})

export class MovieSearchComponent {
[x: string]: any;
  movies: any[] = [];
  selectedMovie: any;
  searchTerm: string= '';
  errorMessage: string = '';

  constructor(private omdbService: OmdbService) {}

  searchMovies() {
    if (this.searchTerm&&this.searchTerm.trim() !== '') {
      this.omdbService.searchMovies(this.searchTerm)
        .subscribe(
          data => {
            if (data.Response === 'True') {
              this.movies = data.Search;
              this.errorMessage = '';
            } else {
              this.errorMessage = 'Movie not found!';
              this.movies = [];
            }
          },
          error => {
            this.errorMessage = 'Error fetching data from OMDB API';
          }
        );
    }
  }


  getMovieDetails(id: string) {
    this.omdbService.getMovieDetails(id)
      .subscribe(data => {
        this.selectedMovie = data;
      });
  }
  
  }


