import { Component, Input, Inject } from '@angular/core';
import { Movie } from '../models/movie.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Movie) {}


  @Input() movie!: Movie;
  @Input() openLightbox!: boolean;

  closeLightbox() {
    this.openLightbox = false;
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }


}
