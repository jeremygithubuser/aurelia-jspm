import {inject} from "aurelia-framework";
import {Lambda} from "greek";
import {MovieService} from "movieService";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject(MovieService)
/* end-non-standard */
export class App {
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