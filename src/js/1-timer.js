"use strict";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js";

const clickBtn = document.querySelector('button[data-start]');

const secondTeg = document.querySelector('span[data-seconds]');
const minuteTeg = document.querySelector('span[data-minutes]');
const hourTeg = document.querySelector('span[data-hours]');
const daysTeg = document.querySelector('span[data-days]');

let currentTime = Date.now();
let userSelectedDate = 0;

const options = {
  dateFormat: "d.m.Y H:i:S",
  "locale": Ukrainian,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates[0].getTime();
        if (userSelectedDate < currentTime) {
            window.alert("Please choose a date in the future")
        }
        
    },
};

flatpickr("#datetime-picker", options);

class Count {    
    constructor() {
        this.rangeTime,
        this.idTimer = false
    }

    startTimer() {
        if (this.idTimer) {
            console.log("timer is active");
            return;
        }
        this.rangeTime = userSelectedDate - currentTime;
        document.getElementById('datetime-picker').disabled = true;
        clickBtn.disabled = true;
        this.idTimer = true;
        console.log("rangeTime ", this.rangeTime);
            setInterval(() => {
                this.rangeTime -= 1000;
                if (this.rangeTime <= 0) {
                    clickBtn.disabled = false;
                    document.getElementById('datetime-picker').disabled = false;
                    clearInterval(this.idTimer);
                    this.idTimer = false;
                    console.log("stop interval", this.idTimer);
                    return;
                }
                let { days, hours, minutes, seconds } = convertMs(this.rangeTime);
                secondTeg.textContent = seconds;
                minuteTeg.textContent = minutes;
                hourTeg.textContent = hours;
                daysTeg.textContent = days;
                console.log( days, hours, minutes, seconds);
        }, 1000);
    }
}


const calculation = new Count();

console.log("my class calculation", calculation);

clickBtn.addEventListener("click", calculation.startTimer);


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
