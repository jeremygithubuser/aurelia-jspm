import "babel-polyfill";
import {Day, dayNames} from "day";
import {monthNames} from "month";
import {getNumberOfDaysInMonth} from "month";
export class Calendar {
    constructor() {
        this.date = new Date();
        this.dayNames = dayNames;
        this.selectedDay = null;
        this.calendarDaysDt = [];
    }
    activate() {

        this.refresh();

    }

    refresh() {
        /* set the days of the current month */
        let numberOfDaysInCurrentMonth = getNumberOfDaysInMonth(this.date);
        let currentMonthDays = this.getMonthDays(this.date, numberOfDaysInCurrentMonth);

        /* set the days of the previous month */
        let numberOfDaysInPrevMonth = getNumberOfDaysInMonth(this.prevMonthDate);
        let prevMonthDays = this.getMonthDays(this.prevMonthDate, numberOfDaysInPrevMonth);

        /* set the days of the next month */
        let numberOfDaysInNextMonth = getNumberOfDaysInMonth(this.nextMonthDate);
        let nextMonthDays = this.getMonthDays(this.nextMonthDate, numberOfDaysInNextMonth);

        /* number of previous month additionnal days */
        let numberOfprevMonthAdditionalDays = currentMonthDays[0].day;
        let numberOfnextMonthAdditionalDays = 42 - (numberOfprevMonthAdditionalDays + currentMonthDays.length);

        let calendarDays = this.getCalendarDays(currentMonthDays, numberOfprevMonthAdditionalDays, prevMonthDays, numberOfnextMonthAdditionalDays, nextMonthDays);

        /* set the selected day */
        this.selectedDay = this.getSelectedDay(calendarDays);
        this.selectedDay.isSelected = true;

        this.calendarDaysDt = this.getCalendarDaysDt(calendarDays);
    }

    selectDay(day) {
        this.selectedDay.isSelected = false;
        this.selectedDay = day;
        this.selectedDay.isSelected = true;
    }

    selectMonth(delta) {
        this.date.setMonth(this.date.getMonth() + delta);
        this.refresh();
    }

    getMonthDays(date, numberOfDaysInMonth) {
        let bufferDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        var days = [];

        for (let i = 1; i <= numberOfDaysInMonth; i++) {
            bufferDate.setDate(i);
            var day = new Day(new Date(bufferDate.valueOf()));
            days.push(day);
        }
        return days;
    }

    get prevMonthDate() {
        let d = new Date(this.date.valueOf());
        d.setMonth(this.date.getMonth() - 1);
        return d;
    }

    get nextMonthDate() {
        let d = new Date(this.date.valueOf());
        d.setMonth(this.date.getMonth() + 1);
        return d;
    }

    get monthName() {
        return monthNames[this.date.getMonth()];
    }

    get year() {
        return this.date.getFullYear();
    }

    getSelectedDay(days) {
        let currentDate = new Date();
        var activeDays = days
        .filter(day => {
            return day.isActive;
        });
        var day = activeDays.find(day => {
            return (currentDate.getFullYear() == day.year && currentDate.getMonth() == day.month && currentDate.getDate() == day.dayOfMonth);
        });
        return (typeof day == 'undefined') ? activeDays[0] : day;
    }

    getCalendarDays(currentMonthDays, numberOfprevMonthAdditionalDays, prevMonthDays, numberOfnextMonthAdditionalDays, nextMonthDays) {
        var calendarDays = [];

        if (numberOfprevMonthAdditionalDays > 0) {
            for (let i = (prevMonthDays.length - numberOfprevMonthAdditionalDays); i < prevMonthDays.length; i++) {
                prevMonthDays[i].isActive = false;
                calendarDays.push(prevMonthDays[i]);
            }
        }

        for (let i = 0; i < currentMonthDays.length; i++) {
            currentMonthDays[i].isActive = true;
            calendarDays.push(currentMonthDays[i]);
        }

        if (numberOfnextMonthAdditionalDays > 0) {
            for (let i = 0; i < numberOfnextMonthAdditionalDays; i++) {
                nextMonthDays[i].isActive = false;
                calendarDays.push(nextMonthDays[i]);
            }
        }

        return calendarDays;
    }

    getCalendarDaysDt(calendarDays) {
        var calendarDaysDt = [];
        for (let i = 0; i < 6; i++) {
            calendarDaysDt.push(calendarDays.slice(7 * i, 7 * (i + 1)));
        }
        return calendarDaysDt;
    }

}