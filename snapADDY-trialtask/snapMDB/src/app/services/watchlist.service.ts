import { Injectable } from '@angular/core';
import { MoviePreviewComponent } from '../movie-preview/movie-preview.component';
import { OmdbService } from './omdb.service';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  movies: any[]= [];
  movieIds: string[]= [];

  constructor(private omdbService: OmdbService){}

  addToWatchList(movie: any): void{
    this.movieIds.push(movie.imdbID)
    this.movies.push(movie)
  }

  removeFromWatchList(movie: any){
    const index= this.movieIds.indexOf(movie.imdbID)
    this.movieIds.splice(index)
    this.movies.splice(index)
  }

  getWatchList(): any[]{
    return this.movies
  }
}
