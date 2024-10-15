import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-movie-preview',
  standalone: true,
  imports: [],
  templateUrl: './movie-preview.component.html',
  styleUrl: './movie-preview.component.scss'
})
export class MoviePreviewComponent {
  @Input() title: string= "";
  @Input() yearOfRelease: number= 0;
  @Input() posterSrc: string= "";

  

}
