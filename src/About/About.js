import {inject} from "aurelia-framework";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject()
/* end-non-standard */
export default class About {
    constructor() {
        this.message = "About me..";
    }
    activate() {

    }
}