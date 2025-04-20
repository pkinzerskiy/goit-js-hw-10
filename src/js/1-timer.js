"use strict"

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const clickBtn = document.querySelector('button[data-start]');
clickBtn.addEventListener("click", startTimer);
const secondTeg = document.querySelector('span[data-seconds]');
const minuteTeg = document.querySelector('span[data-minutes]');
const hourTeg = document.querySelector('span[data-hours]');
const daysTeg = document.querySelector('span[data-days]');

let userSelectedDate = 0;


flatpickr("#datetime-picker", {
    dateFormat: "d.m.Y H:i:S",
    "locale": Ukrainian,
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = (selectedDates[0].getTime());
        setTime(userSelectedDate)
    }
}
);

class ObjTime {
    constructor() {
        this.currentTime = Date.now(),
            this.userSelectedDate = userSelectedDate,
            this.idTimer,
            this.range
    }

    rangeTime() {
        
        this.range = this.userSelectedDate - this.currentTime;

        this.idTimer = setInterval(() => {
                this.range -= 1000;
            if (this.range <= 0) { 
                clearInterval(this.idTimer);
                this.endTimer(this.idTimer);
                return;
            }
            
        console.log(this.range);
        this.setTimeInForm(convertMs(this.range));
        }, 1000)
    }

    setTimeInForm({ days, hours, minutes, seconds }) {
        secondTeg.textContent = seconds;
        minuteTeg.textContent = minutes;
        hourTeg.textContent = hours;
        daysTeg.textContent = days;
        console.log(days, hours, minutes, seconds);
    }

    endTimer() {
        clickBtn.disabled = false;
        document.getElementById('datetime-picker').disabled = false;
        console.log("stop interval", this.idTimer);
        // clearInterval(this.idTimer);
        this.idTimer = '';
        console.log("stop interval", this.idTimer)
        // return;
    }
}

function setTime(userSelectedDate) {
    let currentTime = Date.now();
    if (userSelectedDate < currentTime) {
        showMsg("Please choose a date in the future", "red");
        return;
    }
}

function startTimer(event) {
    event.preventDefault();
    document.getElementById('datetime-picker').disabled = true;
    clickBtn.disabled = true;

    const htest = new ObjTime();   
    htest.rangeTime();
}

function showMsg(msg, color) {
    iziToast.show({
                    message: msg,
                    backgroundColor: color, 
                    messageColor: 'white',
                    position:'topRight'
    
});
}

function convertMs(ms) {
//   Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


function pad(value) {
        return String(value).padStart(2, "0");
}

