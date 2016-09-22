import {inject, NewInstance} from "aurelia-framework";
import {Router} from "aurelia-router";
import {ValidationController} from "aurelia-validation";
import {validateTrigger} from 'aurelia-validation';
import {ValidationRules} from 'aurelia-validation';
import {MovieService} from "movieService";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject(MovieService, Router, NewInstance.of(ValidationController))
/* end-non-standard */
export class Edit {
    constructor(movieService, router, validationController) {
        this.movieService = movieService;
        this.router = router;
        validationController.validateTrigger = validateTrigger.manual;
        this.controller = validationController;
    }
    activate(params) {
        return this.movieService.getById(params.id)
            .then(movie => {
                this.movie = movie;
                ValidationRules
                    .ensure(m => m.title).required()
                    .minLength(3)
                    .maxLength(100)
                    .ensure(m => m.releaseYear).required()
                    .on(this.movie);
                this.controller.validate({ object: this.movie });
            });
    }
    save() {

        this.controller.validate({ object: this.movie }).then((err) => {
            if (err.length === 0) {
                this.movieService.save(this.movie).then(
                    statusCode => {
                        let url = this.router.generate("details", { id: this.movie.id });
                        this.router.navigate(url);
                    }
                );
            }
        });

    }
}