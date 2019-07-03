import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrequencyTimerService {
  timePassed: number = 0;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timePassed == 60) {
        this.timePassed = 0;
      } else {
        this.timePassed++;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  getTimePassed() {
    return this.timePassed;
  }
  constructor() { }
}
