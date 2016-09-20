
import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
/* start-non-standard */
@inject(HttpClient)
/* end-non-standard */
export default class MovieService {
    constructor(httpService) {
        this.http = httpService;
    }
    getMovies() {
        var pA = this.http.get("fakeDatas/movies.json");

        var pB = pA.then(response => {
            return response.content;
        }
        );
        var pC = pB.catch(
            err => {
                return [{
                    id: 1,
                    title: "Star Wars",
                    releaseYear: 1983
                }];
            }
        );
        return pC;

    }
    getById(id) {
        return this.http.get("fakeDatas/movies.json")
            .then(response => {
                return response.content;
            })
            .then(movies => {
                return movies.filter(movie=>{
                    return movie.id == id;
                });
            })
            .then(filteredMovies => {
                return filteredMovies[0];
            })
            .catch(
            err => {
                return {
                    id: 666,
                    title: "fake",
                    releaseYear: 1966
                };
            }
            );
    }
}