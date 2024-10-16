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
  @Input() added?: boolean= false
  
  constructor(private watchListService: WatchlistService){}
  add(): void{
    this.watchListService.add(this.movie)
  }
  
  onWatchList(): boolean{
    return this.watchListService.contains(this.movie)
  }

  
}
