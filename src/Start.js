import {inject} from "aurelia-framework";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject()
/* end-non-standard */
export default class Start {
    constructor() {

    }
    configureRouter(config, router) {
        this.router = router;
        config.map([
            {route:["/","List"],moduleId:"List",title:"List",nav:true,name:"home"},
            {route:"About",moduleId:"About",title:"About",nav:true},
            {route:"Details/:id",moduleId:"Details",title:"Details",name:"Details"}
        ]);
    }
    activate() {

    }
}