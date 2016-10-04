import {inject} from "aurelia-framework";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject()
/* end-non-standard */
export class Start {
    constructor() {
        this.user = { name: "jim" };
    }
    configureRouter(config, router) {
        this.router = router;       
        this.router.navTitle = "Movie Manager";
        config.map([
            { route: ["/", "list"], moduleId: "list", title: "List", nav: true, name: "home" },
            { route: "about", moduleId: "about", title: "About", nav: true },
            { route: "calendar", moduleId: "calendar", title: "Calendar", nav: true },
            { route: "details/:id", moduleId: "details", title: "Details", name: "details" },
            { route: "edit/:id", moduleId: "edit", title: "Edit", name: "edit" }
        ]);
    }
    activate() {

    }
    logout(){
        alert("bye bye" + this.user.name);
    }
}