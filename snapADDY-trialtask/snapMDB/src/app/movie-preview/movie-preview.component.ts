import { Component, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import EventEmitter from 'events';
import { WatchlistService } from '../services/watchlist.service';


@Component({
  selector: 'app-movie-preview',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './movie-preview.component.html',
  styleUrl: './movie-preview.component.scss'
})
export class MoviePreviewComponent {
  @Input() movie: any= "";
  

  
  
   clicked: boolean= false;
   added: boolean= false;

  constructor(private watchListService: WatchlistService){}
  addToWatchList(): void{
    if(this.added){
      this.watchListService.removeFromWatchList(this.movie.imdbID)
      this.added= false;
      return
    }
    this.watchListService.addToWatchList(this.movie)
    this.added= true;
    
  }
  
  click(): void{
    this.clicked= true}

  close():void{
    this.clicked=false
  }
  
}
