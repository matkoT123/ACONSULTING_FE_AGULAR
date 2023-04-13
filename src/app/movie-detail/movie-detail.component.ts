import { Component, Input, Inject } from '@angular/core';
import { Movie } from '../models/movie.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: number) {}

  

  
}
