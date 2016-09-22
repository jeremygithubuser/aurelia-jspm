import {inject} from "aurelia-framework";
import {MovieService} from "movieService";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject(MovieService)
/* end-non-standard */
export class Details {
    constructor(movieService) {
        this.movieService = movieService;
    }
    activate(params) {
        return this.movieService.getById(params.id)
        .then(movie => {
            this.movie=movie;
        });
    }
}