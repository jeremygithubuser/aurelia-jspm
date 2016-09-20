import {inject} from "aurelia-framework";
import MovieService from "MovieService";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject(MovieService)
/* end-non-standard */
export default class List {
  constructor(movieService) {
    this.movieService = movieService;
  }
  activate() {
      this.movieService.getMovies().then((movies) => {
      this.movies = movies;
    });
  }
}