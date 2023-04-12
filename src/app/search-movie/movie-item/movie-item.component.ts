import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  showLightbox: boolean = false;
  @Input() movie!: Movie;
  @Output() movieSelected = new EventEmitter<Movie>();
  @Output() changeLightboxState = new EventEmitter<boolean>();



  constructor() { }

  onSelected(movie: Movie) {
    this.movieSelected.emit(movie);
    this.showLightbox = true;
    this.changeLightboxState.emit(this.showLightbox);
  }
}
