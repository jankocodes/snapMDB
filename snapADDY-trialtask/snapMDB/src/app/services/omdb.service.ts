import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  private apiUrl = 'https://www.omdbapi.com/?apikey=9a82ceaa';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    const url = `${this.apiUrl}&s=${title}`;
    return this.http.get(url);
  }

  getMovieDetails(id: string): Observable<any> {
    const url = `${this.apiUrl}&i=${id}`;
    return this.http.get(url);
  }
  
  
}
