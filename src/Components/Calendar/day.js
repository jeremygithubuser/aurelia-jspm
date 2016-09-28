import {monthNames} from "month";
export class Day {
    constructor(date) {
        this.date = date;
    }
    get day() {
        return this.date.getDay();
    }
    get dayName() {
        return dayNames[this.date.getDay()];
    }
    get year() {
        return this.date.getFullYear();
    }
    get month(){
        return this.date.getMonth();
    }
    get monthName() {
        return monthNames[this.date.getMonth()];
    }
    get dayOfMonth() {
        return this.date.getDate();
    }
}
export var dayNames = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");