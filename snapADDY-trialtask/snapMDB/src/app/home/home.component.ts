import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MoviePreviewComponent } from "../movie-preview/movie-preview.component";
import { MovieSearchComponent } from "../movie-search/movie-search.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MoviePreviewComponent, MovieSearchComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() movies: any[]= [];

}
