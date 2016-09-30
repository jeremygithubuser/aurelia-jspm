import {bindable} from "aurelia-framework";

export class DayCalendar {
    /* start-non-standard */
    @bindable selectedDay = null;
    @bindable selectedHalfHours = [];
    /* end-non-standard */
}