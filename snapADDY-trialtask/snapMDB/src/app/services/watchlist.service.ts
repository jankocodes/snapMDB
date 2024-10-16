import { Injectable } from '@angular/core';
import { MoviePreviewComponent } from '../movie-preview/movie-preview.component';
import { OmdbService } from './omdb.service';

@Injectable({
  providedIn: 'root'
})
/*************  ✨ Codeium Command 🌟  *************/
export class WatchlistService {

  movies: any[]= [];

  constructor(private omdbService: OmdbService){}

  add(movie: any){
    let index: number;

    if((index= this.movies.indexOf(movie))>=0){
      this.movies.splice(index, 1)
    }
    else{
      this.movies.push(movie)
    }

  }

  contains(movie: any){
    return this.movies.indexOf(movie)>=0
  }

  getWatchList(): any[]{
    return this.movies
  }
}
/******  af0f10e5-36d5-4c76-8fbc-cb85ba6337f1  *******/
