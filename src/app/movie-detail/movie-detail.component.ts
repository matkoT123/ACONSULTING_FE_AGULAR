import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  @Input() movie!: Movie;
  @Input() openLightbox!: boolean;

  closeLightbox() {
    this.openLightbox = false;
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  
}
