import {inject} from "aurelia-framework";
import {Lambda} from "Greek";
import MovieService from "MovieService";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject(MovieService)
/* end-non-standard */
export default class App {
  constructor(movieService) {
    var a = new Lambda();
    var b = a.method();
    this.message = `Hello World of dev! ${b}`;
    this.content = "Hello content";
    this.movieService = movieService;
  }
  activate() {
      this.movieService.getMovies().then((movies) => {
      this.movies = movies;
    });
  }
}