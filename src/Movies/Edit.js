import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import MovieService from "MovieService";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject(MovieService, Router)
/* end-non-standard */
export default class Edit {
    constructor(movieService, router) {
        this.movieService = movieService;
        this.router = router;
    }
    activate(params) {
        return this.movieService.getById(params.id)
            .then(movie => {
                this.movie = movie;
            });
    }
    save() {
        this.movieService.save(this.movie).then(
            statusCode=>{
                let url = this.router.generate("Details",{id:this.movie.id});
                this.router.navigate(url);
            }
        );
    }
}