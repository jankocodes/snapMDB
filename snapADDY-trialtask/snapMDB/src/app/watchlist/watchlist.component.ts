import { Component, OnInit } from '@angular/core';
import { MoviePreviewComponent } from '../movie-preview/movie-preview.component';
import { WatchlistService } from '../services/watchlist.service';
import { OmdbService } from '../services/omdb.service';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [MoviePreviewComponent],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss'
})
export class WatchlistComponent{

  constructor(private watchListService: WatchlistService){
    
  }
  watchlist= this.watchListService.getWatchList()
  
  
  
}
