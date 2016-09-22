import {inject} from "aurelia-framework";
import {MovieService} from "movieService";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject(MovieService)
/* end-non-standard */
export class List {
  constructor(movieService) {
    this.movieService = movieService;
  }
  activate() {
    return this.movieService.getMovies().then((movies) => {
      this.movies = movies;
    });
  }
}