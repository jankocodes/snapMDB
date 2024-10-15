import { Routes } from '@angular/router';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

export const routes: Routes = [{
    path: "watchlist", component: WatchlistComponent},
    {path: '', component: MovieSearchComponent
}];
