import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieDetailComponent } from 'src/app/movie-detail/movie-detail.component';

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

  onSelected(movie: Movie) {
    this.movieSelected.emit(movie);
    this.showLightbox = true;
    this.changeLightboxState.emit(this.showLightbox);
  }

  constructor(public dialog: MatDialog) {}

  openDialog(movie: Movie) {
    this.dialog.open(MovieDetailComponent, {
      data: {
        movie: movie,
      },
    })
  }
}
