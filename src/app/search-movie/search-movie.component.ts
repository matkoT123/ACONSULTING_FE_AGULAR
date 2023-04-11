import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  searchQuery: string = '';
  movies: Movie[] = [];
  isModalOpen: boolean = false;

  selectedMovie!: Movie;
  lightboxState!: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  searchMovies() {
    this.http.get<any>(`https://www.omdbapi.com/?s=${this.searchQuery}&apikey=54b19d63`)
      .subscribe(data => {
        if (data.Search) {
          this.movies = []; // Clear the movies array
          const moviePromises = data.Search.map((movie: { imdbID: any; }) => {
            return this.http.get<Movie>(`https://www.omdbapi.com/?i=${movie.imdbID}&plot=short&apikey=54b19d63`)
              .toPromise(); // Convert each API call to a Promise
          });

          Promise.all(moviePromises)
            .then(movieData => {
              this.movies = movieData.filter(movie => movie); // Filter out null or undefined results
              console.log(this.movies); // Output movies array to console
            })
            .catch(error => {
              console.error(error);
              this.movies = []; // Clear the movies array on error
            });
        } else {
          this.movies = []; // Clear the movies array if no results
        }
      });
  }
}
